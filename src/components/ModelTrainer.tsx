import React, { useState, useEffect } from 'react';
import Replicate from 'replicate';
import { Brain } from 'lucide-react';

interface ModelTrainerProps {
  images: File[];
}

const ModelTrainer: React.FC<ModelTrainerProps> = ({ images }) => {
  const [trainingStatus, setTrainingStatus] = useState('Preparing...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const trainModel = async () => {
      try {
        const replicate = new Replicate({
          auth: process.env.REPLICATE_API_TOKEN,
        });

        // Upload images to a temporary storage and get URLs
        // This step is simplified and would require actual implementation
        const imageUrls = await Promise.all(images.map(async (image) => {
          // Placeholder for image upload logic
          return `https://example.com/uploaded-image-${image.name}`;
        }));

        const training = await replicate.trainings.create(
          "ostris",
          "flux-dev-lora-trainer",
          "29337367d801d93e9193dafd8fcfb5653eeacd841fe85db9118023fbb10ebed0",
          {
            destination: "/my-flux-model",
            input: {
              steps: 1000,
              lora_rank: 16,
              optimizer: "adamw8bit",
              batch_size: 1,
              resolution: "512,768,1024",
              autocaption: true,
              input_images: imageUrls.join(','),
              trigger_word: "TOK",
              learning_rate: 0.0004,
              wandb_project: "flux_train_replicate",
              wandb_save_interval: 100,
              caption_dropout_rate: 0.05,
              cache_latents_to_disk: false,
              wandb_sample_interval: 100
            }
          }
        );

        setTrainingStatus(`Training started. ID: ${training.id}`);

        // Poll for training status
        const checkStatus = setInterval(async () => {
          const status = await replicate.trainings.get(training.id);
          setTrainingStatus(`Status: ${status.status}`);

          if (status.status === 'succeeded') {
            clearInterval(checkStatus);
            setTrainingStatus('Training completed successfully!');
          } else if (status.status === 'failed') {
            clearInterval(checkStatus);
            setError('Training failed. Please try again.');
          }
        }, 10000); // Check every 10 seconds

      } catch (err) {
        setError('An error occurred during training. Please try again.');
        console.error(err);
      }
    };

    trainModel();
  }, [images]);

  return (
    <div className="text-center">
      <Brain className="mx-auto mb-4 animate-pulse" size={64} />
      <h2 className="text-2xl font-bold mb-4">Training in Progress</h2>
      <p className="mb-2">{trainingStatus}</p>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ModelTrainer;