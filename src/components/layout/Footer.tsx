import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">產品</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">功能介紹</a></li>
              <li><a href="#" className="hover:text-white transition">價格方案</a></li>
              <li><a href="#" className="hover:text-white transition">使用教學</a></li>
              <li><a href="#" className="hover:text-white transition">更新日誌</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">資源</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">開發文檔</a></li>
              <li><a href="#" className="hover:text-white transition">API參考</a></li>
              <li><a href="#" className="hover:text-white transition">社群支援</a></li>
              <li><a href="#" className="hover:text-white transition">常見問題</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">公司</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">關於我們</a></li>
              <li><a href="#" className="hover:text-white transition">工作機會</a></li>
              <li><a href="#" className="hover:text-white transition">媒體資源</a></li>
              <li><a href="#" className="hover:text-white transition">聯絡我們</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">法律</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">隱私政策</a></li>
              <li><a href="#" className="hover:text-white transition">服務條款</a></li>
              <li><a href="#" className="hover:text-white transition">安全說明</a></li>
              <li><a href="#" className="hover:text-white transition">版權聲明</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2024 AI Photography Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 