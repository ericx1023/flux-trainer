import React, { useState } from 'react';
import { Upload, Brain } from 'lucide-react';
import ImageUploader from './components/ImageUploader';
import ModelTrainer from './components/ModelTrainer';

function App() {
  const [images, setImages] = useState<File[]>([]);
  const [isTraining, setIsTraining] = useState(false);

  const handleImageUpload = (uploadedImages: File[]) => {
    setImages(uploadedImages);
  };

  const handleStartTraining = () => {
    setIsTraining(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Flux Model Trainer</h1>
      {!isTraining ? (
        <>
          <ImageUploader onUpload={handleImageUpload} />
          {images.length > 0 && (
            <button
              onClick={handleStartTraining}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <Brain className="mr-2" />
              Start Training
            </button>
          )}
        </>
      ) : (
        <ModelTrainer images={images} />
      )}
    </div>
  );
}

export default App;