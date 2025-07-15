import React, { useState, useEffect } from 'react';
import './App.css';
import { ChevronRight, BookOpen, Brain, Cpu, TrendingUp, Menu, X } from 'lucide-react';

// 导入图片
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.GIF';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.png';
import image8 from './assets/image8.png';
import image9 from './assets/image9.png';
import image10 from './assets/image10.png';
import image11 from './assets/image11.png';
import image12 from './assets/image12.png';
import image13 from './assets/image13.png';
import image14 from './assets/image14.png';
import image15 from './assets/image15.png';
import image16 from './assets/image16.jpeg';
import image17 from './assets/image17.jpeg';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [sidebarOpen, setSidebarOpen] = useState(true); // 默认侧边栏打开

  const sections = [
    { id: 'intro', title: '课程介绍', icon: BookOpen },
    { id: 'chapter1', title: '第一章：AI发展历程与核心知识点', icon: Brain },
    { id: 'chapter2', title: '第二章：近年的AI关键技术支撑与应用范式', icon: Cpu },
    { id: 'chapter3', title: '第三章：市场主流AI大模型与热门应用', icon: TrendingUp },
    { id: 'chapter4', title: '第四章：发展趋势与挑战', icon: TrendingUp }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = 'intro';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          current = section.getAttribute('data-section');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // setSidebarOpen(false); // 滚动后不自动关闭侧边栏，用户可以手动关闭
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* 侧边导航 */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-40 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 border-b relative">
          <h1 className="text-2xl font-bold text-gray-800">AI发展与应用</h1>
          <p className="text-gray-600 mt-2">课件展示   （2025-07-13）</p>
        </div>
        
        <nav className="p-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center p-3 rounded-lg mb-2 transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} className="mr-3" />
                <span className="text-left text-sm">{section.title}</span>
                <ChevronRight size={16} className="ml-auto" />
              </button>
            );
          })}
        </nav>
      </div>

      {/* 主内容区域 */}
      <div className={`min-h-screen ${sidebarOpen ? 'ml-80' : 'ml-0'} transition-all duration-300`}>
        {/* 顶部导航栏，包含标题和控制按钮 */}
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">AI发展与应用</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-white p-2 rounded-lg shadow-lg"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* 占位符，防止内容被固定头部遮挡 */}
        <div className="pt-20"></div> {/* 根据header高度调整 */}

        {/* 课程介绍 */}
        <section data-section="intro" className="p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">AI发展与应用</h1>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-blue-600">AI发展历程与核心知识点</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-green-600">近两年的AI应用类型与关键技术</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-purple-600">市场主流AI大模型与热门应用</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-orange-600">趋势与挑战</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 第一章 */}
        <section data-section="chapter1" className="p-8 lg:p-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">1. AI 发展历程与核心知识点</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">1.1 AI 的发展历程</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <img src={image1} alt="AI发展历程" className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-sm" />
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold mb-4">标志性突破：</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                    <span>2016年，DeepMind的AlphaGo战胜世界围棋冠军李世石，成为AI发展史上的里程碑事件。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                    <span>2023年，ChatGPT作为划时代产品让普通人近距离感受AI的强大能力。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                    <span>2025年，DeepSeek重新定义了全球AI的门槛。</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">1.2 AI (LLM) 发展的核心技术</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">a. Word2Vec（Word to vector词向量）</h4>
                <div className="bg-green-50 p-6 rounded-lg mb-4">
                  <p className="mb-4"><strong>NLP（Natural Language Processing) 关键技术</strong>：</p>
                  <p className="mb-4">自然语言处理是AI领域的关键技术栈，计算机如何能读懂自然语言，用数学来表示词语含义是关键。 Word2Vec通过浅层神经网络训练词向量，建立"语义坐标系"。</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <img src={image2} alt="Word2Vec示例" className="w-full rounded-lg shadow-sm" />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">One-hot：</h5>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>香蕉 = (1 0 0 0 0 ... 0)</li>
                      <li>猴子 = (0 1 0 0 0 ... 0)</li>
                      <li>苹果 = (0 0 1 0 0 ... 0)</li>
                      <li>飞机 = (0 0 0 0 1 ... 0)</li>
                    <p className="mt-4 text-sm text-gray-600"></p>
                      <li> </li>
                    </ul>
             

                    <p className="font-semibold mb-3">Word Embedding：</p>
                    <p className="mt-2 text-sm text-gray-600"> <br/><a href="https://ronxin.github.io/wevi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ronxin.github.io/wevi/</a></p>
                     <p className="mt-4 text-sm text-gray-600"></p>
                    <h5 className="font-semibold mb-3">词向量表示示例：</h5>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>香蕉 = (1,0,0,0)</li>
                      <li>猴子 = (0,1,2,1)</li>
                      <li>苹果 = (1,0,100,5)</li>
                      <li>飞机 = (0,1000,300,32)</li>
                    </ul>
                      <p className="mt-4 text-sm text-gray-600"></p>           
                   <p className="mt-4 text-sm text-gray-600">TensorFlow Embedding Projector  <br/><a href="https://projector.tensorflow.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://projector.tensorflow.org/</a></p>

                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">b. RNN 与 CNN</h4>
                <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                  <p className="mb-4"><strong>RNN</strong>（Recurrent Neural Networks，RNN）特点：</p>
                  <p className="mb-4">RNN的特别之处在于它的"循环结构", 会逐个处理序列中的每个数据点。RNN能够很好地处理有顺序的数据，比如文字、语音、时间序列等。</p>
                </div>

                <div className="mb-6">
                  <img src={image3} alt="RNN结构图" className="w-full max-w-2xl mx-auto rounded-lg shadow-sm mb-4" />
                  <p className="text-sm text-gray-600 text-center">x为输入，y为输出，h为隐藏层，A为隐藏层 → 输出层的权重矩阵，B为输入层 → 隐藏层的权重矩阵，C为隐藏层 → 隐藏层（递归）的权重矩阵。</p>
                </div>

                <div className="mb-6">
                  <img src={image4} alt="RNN处理流程" className="w-full max-w-2xl mx-auto rounded-lg shadow-sm" />
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h5 className="font-semibold mb-4">样例1：</h5>
                  <p className="italic">"小红放学回到家，她妈妈放下了手里的苹果手机，从冰箱里拿来两个苹果和半块西瓜给小红和她弟弟。"</p>
                <p className="mt-4 text-sm text-gray-600"></p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2">时间步 t</th>
                          <th className="border border-gray-300 p-2">当前词 xₜ</th>
                          <th className="border border-gray-300 p-2">隐藏状态 hₜ里大概内容</th>
                          <th className="border border-gray-300 p-2">说明</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2">1</td>
                          <td className="border border-gray-300 p-2">小红</td>
                          <td className="border border-gray-300 p-2">人物=小红(女)</td>
                          <td className="border border-gray-300 p-2">初始化：记录主语信息</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">2</td>
                          <td className="border border-gray-300 p-2">放学</td>
                          <td className="border border-gray-300 p-2">人物=小红(女)；动作=放学</td>
                          <td className="border border-gray-300 p-2">继续追加动作</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">3</td>
                          <td className="border border-gray-300 p-2">回到</td>
                          <td className="border border-gray-300 p-2">人物=小红；动作=回到…</td>
                          <td className="border border-gray-300 p-2"> </td>
                        </tr>
                         <tr>
                          <td className="border border-gray-300 p-2">4</td>
                          <td className="border border-gray-300 p-2">家</td>
                          <td className="border border-gray-300 p-2">场景=家；人物=小红</td>
                          <td className="border border-gray-300 p-2">场景落定</td>
                        </tr>                       
                        <tr>
                          <td className="border border-gray-300 p-2">5</td>
                          <td className="border border-gray-300 p-2">她</td>
                          <td className="border border-gray-300 p-2">人物=小红(女) (复用)</td>
                          <td className="border border-gray-300 p-2">依赖隐藏状态中"小红(女)"才能正确解析"她"</td>
                        </tr>
                         <tr>
                          <td className="border border-gray-300 p-2">6</td>
                          <td className="border border-gray-300 p-2">妈妈</td>
                          <td className="border border-gray-300 p-2">人物=妈妈；关系=母女</td>
                          <td className="border border-gray-300 p-2">角色切换，新人物加入 </td>
                        </tr>
                         <tr>
                          <td className="border border-gray-300 p-2">7</td>
                          <td className="border border-gray-300 p-2">放下</td>
                          <td className="border border-gray-300 p-2">人物=妈妈；动作=放下…</td>
                          <td className="border border-gray-300 p-2"> </td>
                        </tr>
                         <tr>
                          <td className="border border-gray-300 p-2">8</td>
                          <td className="border border-gray-300 p-2">手里</td>
                          <td className="border border-gray-300 p-2">...</td>
                          <td className="border border-gray-300 p-2"> </td>
                        </tr>                       
                        <tr>
                          <td className="border border-gray-300 p-2">9</td>
                          <td className="border border-gray-300 p-2">苹果(手机)</td>
                          <td className="border border-gray-300 p-2">物品=苹果手机</td>
                          <td className="border border-gray-300 p-2">记录正在被放下的是手机</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">10</td>
                          <td className="border border-gray-300 p-2">冰箱</td>
                          <td className="border border-gray-300 p-2">地点=冰箱</td>
                          <td className="border border-gray-300 p-2"> </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">11</td>
                          <td className="border border-gray-300 p-2">拿来</td>
                          <td className="border border-gray-300 p-2">动作=拿来</td>
                          <td className="border border-gray-300 p-2"> </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">12</td>
                          <td className="border border-gray-300 p-2">两个</td>
                          <td className="border border-gray-300 p-2">数量(下一个名词)=2</td>
                          <td className="border border-gray-300 p-2">数量词暂存在门控单元里，等待下一个名词 </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">13</td>
                          <td className="border border-gray-300 p-2">苹果(水果)</td>
                          <td className="border border-gray-300 p-2">物品=苹果水果×2</td>
                          <td className="border border-gray-300 p-2">数量词门被打开，数量与名词绑定</td>
                        </tr> 
                        <tr>
                          <td className="border border-gray-300 p-2">14</td>
                          <td className="border border-gray-300 p-2">半块</td>
                          <td className="border border-gray-300 p-2">数量(下一个名词)=0.5</td>
                          <td className="border border-gray-300 p-2"> </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">15</td>
                          <td className="border border-gray-300 p-2">西瓜</td>
                          <td className="border border-gray-300 p-2">物品=西瓜×0.5</td>
                          <td className="border border-gray-300 p-2"> </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">16</td>
                          <td className="border border-gray-300 p-2">给</td>
                          <td className="border border-gray-300 p-2">动作=给…</td>
                          <td className="border border-gray-300 p-2"> </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">17</td>
                          <td className="border border-gray-300 p-2">小红</td>
                          <td className="border border-gray-300 p-2">受赠人=小红</td>
                          <td className="border border-gray-300 p-2"> </td>
                        </tr>
                         <tr>
                          <td className="border border-gray-300 p-2">18</td>
                          <td className="border border-gray-300 p-2">弟弟</td>
                          <td className="border border-gray-300 p-2">受赠人=小红+弟弟</td>
                          <td className="border border-gray-300 p-2">句子结束，隐藏状态包含几乎全部概要 </td>
                        </tr>                       
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h5 className="font-semibold mb-4">缺点：</h5>
                  <ul className="space-y-2">
                    <li>• 遗忘长序列信息：RNN容易"忘记"很久之前的信息，在处理很长的序列时，表现也不太好。</li>
                    <li>• 训练困难：训练RNN时，可能会遇到"梯度消失"和"梯度爆炸"。</li>
                    <li>• RNN模型的主要问题是输入是序列，只能按照顺序处理数据，无法并行处理，计算成本很高。尽管也有包括GRU、LSTM这种架构改进，也无法解决这些根本性的问题。</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h5 className="font-semibold mb-4">样例2：判断下面这部电影评价是正面还是负面？</h5>
                  <p className="italic">"这部电影创意很好，演员也不错，但是剧情拖沓冗长，让人昏昏欲睡。"</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <p><strong>CNN：主要用于图像识别。</strong></p>
                  <p className="mt-2">CNN（Convolutional Neural Networks）主要用于图像识别领域。</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">c. Transformer架构</h4>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="mb-4"><strong>Transformer</strong>是2017年Google提出的一种方法，来自论文《Attention is All You Need》。该架构的核心思想是一种基于自注意力机制（self-attention mechanism）的神经网络架构。</p>
                </div>

                <div className="mb-6">
                  <img src={image5} alt="Transformer架构图" className="w-full max-w-lg mx-auto rounded-lg shadow-sm" />
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h5 className="font-semibold mb-4">编码器（Encoder）：</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• 处理输入信息</li>
                      <li>• 由多层相同结构堆叠而成</li>
                      <li>• 每层包含两个子层：多头自注意力机制和前馈神经网络 (Feed-Forward Network)</li>
                      <li>• 每个子层都使用残差连接 (Residual Connection) 和 层归一化 (LayerNorm) </li>
                      <li>• 实现全局关联：能同时处理序列中所有元素之间的关系</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h5 className="font-semibold mb-4">解码器（Decoder）：</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• 生成输出信息</li>
                      <li>• 同样由多层结构组成</li>
                      <li>• 每层包含三个子层：带掩码的多头自注意力、编码器-解码器注意力机制和前馈神经网络</li>
                      <li>• 带掩码的多头自注意力 (防止看见未来信息)</li>
                      <li>• 编码器-解码器注意力 (关注输入的关键部分)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">d. 自注意力机制（Self-Attention）</h4>
                <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                  <p className="mb-4">Transformer通过词嵌入 (Word Embeddings) + 位置编码 (Positional Encoding) → 让模型知道词序。它将输入序列分别传递给编码器和解码器，编码器和解码器可以同时处理多个序列位置，可以更高效地处理长序列。</p>
                  <p className="mb-4"><strong>注意力机制是Transformer架构的核心，</strong>核心思想是让模型能够像聚光灯一样，有选择地聚焦于输入信息中最相关的部分。</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h5 className="font-semibold mb-4">核心组件：</h5>
                  <div className="grid lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h6 className="font-semibold text-blue-600 mb-2">Q（Query）</h6>
                      <p className="text-sm">代表当前需要关注的信息，如"我现在在找什么信息？"</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h6 className="font-semibold text-green-600 mb-2">K（Key）</h6>
                      <p className="text-sm">代表输入信息各个部分的"标识"，如"别人来找我时，用什么标签能对上我？"</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h6 className="font-semibold text-purple-600 mb-2">V（Value）</h6>
                      <p className="text-sm">代表输入内容的各个部分的实际具体表示，"一旦有人决定听我，我要贡献哪些信息？"</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h5 className="font-semibold mb-4">例句：</h5>
                  <p className="mb-4 italic">"小红放学回到家，她妈妈放下了手里的苹果手机，从冰箱里拿来两个苹果和半块西瓜给小红和她弟弟。"</p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2">对象</th>
                          <th className="border border-gray-300 p-2">用途</th>
                          <th className="border border-gray-300 p-2">在这句话里的例子（简化描述）</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2">Q</td>
                          <td className="border border-gray-300 p-2">"我现在在找什么信息？"</td>
                          <td className="border border-gray-300 p-2">• "她" 的 Q：我要确认自己指哪位女生。<br/>• "两个" 的 Q：我要找被我修饰的名词。</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">K</td>
                          <td className="border border-gray-300 p-2">"别人来找我时，用什么标签能对上我？"</td>
                          <td className="border border-gray-300 p-2">"小红" 的 K：标签＝女生、主角。<br/>• "苹果"(手机) 的 K：标签＝电子商品。<br/>• "苹果"(水果) 的 K：标签＝可食水果。</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2">V</td>
                          <td className="border border-gray-300 p-2">"一旦有人决定听我，我要贡献哪段信息？"</td>
                          <td className="border border-gray-300 p-2">• "小红" 的 V：包含性别、身份。<br/>• "苹果"(水果) 的 V：包含"水果"特征，方便后面提到"两个苹果"时复用。</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p>• 一次自注意力中，每个词都会把自己的 Q 与所有人的 K 做点积 → 得到一行匹配分数。</p>
                  <p>• Softmax 得到权重 → 说明"我此刻该听谁、听多少"。</p>
                  <p>• 用权重对所有人的 V 做加权平均 → 得到自己的 新表示（已融入上下文）。</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <img src={image6} alt="注意力权重示例" className="w-full rounded-lg shadow-sm mb-2" />
                    <p className="text-sm text-gray-600 text-center">a₁₁、a₁₂、a₁₃、a₁₄ 的是 注意力权重（attention weights）</p>
                  </div>
                  <div>
                    <img src={image7} alt="注意力计算过程" className="w-full rounded-lg shadow-sm" />
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h5 className="font-semibold mb-4">多头注意力（Multi-Head Attention）：</h5>
                  <p className="mb-4">单一注意力可能不够，模型需要同时关注不同方面的信息（如语法、语义、指代）。</p>
                  <p className="mb-4">多头注意力机制通过并行运行多个注意力"头"，使模型能够同时关注不同的表示子空间，每组独立计算Attention, 再融合所有头的信息。</p>
                  
                  <div className="mb-4">
                    <img src={image8} alt="多头注意力机制" className="w-full max-w-2xl mx-auto rounded-lg shadow-sm" />
                  </div>
                  
                  <p>多头注意力机制使模型能够同时关注不同的表示子空间，从而捕获更丰富的特征信息，表达能力更强。</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <img src={image9} alt="多层自注意力" className="w-full rounded-lg shadow-sm mb-2" />
                    <p className="text-sm text-gray-600">多层自注意力计算：每层包含多头自注意力机制，使模型能够同时关注不同位置的信息。残差连接与层归一化：确保深层网络的稳定训练。</p>
                  </div>
                  <div>
                    <img src={image10} alt="层次化处理" className="w-full rounded-lg shadow-sm mb-2" />
                    <p className="text-sm text-gray-600">Nx Layers = 把“分会 + 汇总”这套流程重复 N 次，层层精炼句子含义，最后输出给下游任务。</p>

                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="mb-2">• Q/K/V: 是每个词随身带的提问贴 / 名片 / 笔记</p>
                  <p className="mb-2">• 单头:一张大投票表，"所有关系挤在一场会"</p>
                  <p>• 多头:同步开多场分会，各盯一件事，再合并</p>
                </div>

                <div className="mb-6">
                  <img src={image11} alt="Transformer完整架构" className="w-full max-w-2xl mx-auto rounded-lg shadow-sm" />
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h5 className="font-semibold mb-4">Transformer架构的重要意义：</h5>
                  <p className="mb-4"><strong>Transformer架构已成为自然语言处理（NLP）乃至多模态AI的基础架构，彻底改变了序列数据处理方式。CNN同样也在采用Transformer 架构下实现飞速进步。</strong></p>
                  <ul className="space-y-2">
                    <li>• 通过位置编码弥补了自注意力机制无法感知序列位置信息的缺陷；</li>
                    <li>• 通过并行处理序列数据，高效捕捉全局关联；</li>
                    <li>• 通过残差连接和层归一化稳定训练。</li>
                    <li>• 通过非序列数据处理的架构设计充分发挥了并行计算的效率，极大限度发挥了 GPU 在AI计算中的能力，促使AI技术发展在近些年的突飞猛进。</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">1.3. 大模型参数</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4">a. Token: 语义单元(字母，单词，词根，字，词)</h4>
                <h4 className="text-xl font-semibold mb-4">b. 参数计算：</h4>
                <ul className="space-y-2 mb-6">
                  <li>• <strong>d_embed：</strong>投影矩阵的输入维度,每个 token 的完整表示向量长度;</li>
                  <li>• <strong>d_head:</strong> 投影矩阵的输出维度,单个注意力头分得的子空间维度;</li>
                  <li>• <strong>W_k/q/v:</strong> 把12,288 维向量映射到 128 维的小向量的权重矩阵</li>
                </ul>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <img src={image12} alt="参数计算示例1" className="w-full rounded-lg shadow-sm" />
                <img src={image13} alt="参数计算示例2" className="w-full rounded-lg shadow-sm" />
              </div>

              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <img src={image14} alt="参数计算示例3" className="w-full rounded-lg shadow-sm" />
                <img src={image15} alt="参数计算示例4" className="w-full rounded-lg shadow-sm" />
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <p>资料链接（Sequence to sequence）</p>
                <a href="https://www.youtube.com/watch?v=eMlx5fFNoYc" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  https://www.youtube.com/watch?v=eMlx5fFNoYc
                </a>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">1.4. 大模型是如何训练的</h3>
              
              <div className="space-y-8">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">a. 海量数据 (数据管线)</h4>
                  <ul className="space-y-2">
                    <li>• 抓取网页、书籍、代码库、学术论文、论坛、聊天记录，近年还加入图像、音频、视频字幕，容量≥数万亿 token，必须涵盖多语种、多领域、多模态。</li>
                    <li>• 去重 & 质量过滤：去重、NSFW 过滤、拼写检测、语言检测、毒性检测</li>
                    <li>• 分层采样：高质量语料（百科、论文）权重，低噪声社媒权重（避免模型学会"网络俚语优先"）</li>
                    <li>• 分词 / 编码：统一成离散 token 序列，供 Transformer 处理</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">b. 大规模并行算力</h4>
                  <ul className="space-y-2">
                    <li>• 巨量预训练：让模型"读万卷书"</li>
                    <li>• 分布式训练栈, 巨量分布式并行计算</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">c. 对齐微调：让AI说人话、守规矩</h4>
                  <ul className="space-y-2">
                    <li>• 监督微调（SFT）：精选高质量问答/代码/多轮对话数百万条</li>
                    <li>• 教模型学会指令服从、格式输出</li>
                    <li>• 偏好强化学习，收集偏好对：（例如：标注 A 好于 B）</li>
                    <li>• 训练奖励模型 (RM)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">d. 多阶段对齐</h4>
                  <ul className="space-y-2">
                    <li>• 安全对齐</li>
                    <li>• 拒答策略</li>
                    <li>• 自动漏洞扫描，人工极端提示测试</li>
                    <li>• 输出置信度/引用陪伴，降低幻觉风险</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">1.5. 量化</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="mb-4">把 32 位或 16 位的所有浮点权重，用更少的比特（8 bit、4 bit、3 bit...）近似存储和计算，从而缩小体积、降低显存并加快推理。量化只影响参数的位宽（精度），但不影响参数的数量。常见 8/6/4/3 bit，bit 越少压缩越狠，但误差风险增大。</p>
                <p className="italic">例子： 一张5 GB 的照片进行压缩，打印</p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">1.6. 大模型蒸馏（distillation）：</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="mb-4">通过让模型直接学习其他现有模型的输出分布 (logits / soft labels)，中间特征 (hidden states / attention，如对齐输出 or 输出+隐藏层 or 逐步链式思考轨迹)，关系知识 (relational / contrastive)</p>
                <p className="mb-4">通过让模型"抄"老师的"过程与答案"，在大幅减小参数和算力的同时，尽量保住脑力与智慧</p>
              </div>
            </div>
          </div>
        </section>

        {/* 第二章 */}
        <section data-section="chapter2" className="p-8 lg:p-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">2. 近年的AI关键技术支撑与应用范式</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">2.1 向量数据库（Vector Database）</h3>
              <div className="bg-white p-6 rounded-lg mb-6">
                <p className="mb-4">不同于传统 SQL，NoSQL数据库，向量数据库专门用于存储、管理和检索<strong>高维向量</strong>（数据的数学表示/嵌入）的数据库。文本/图像/音视频等数据均可通过AI模型（如嵌入模型）转换为高维向量。</p>
                
                <p className="mb-4">向量数据库核心功能是通过相似性搜索来检索数据。是大规模语义搜索、推荐、AI记忆等应用的基石，通常采用以下步骤：</p>
                
                <ul className="space-y-2 mb-6">
                  <li>• 向量化：将文本、图像等数据转换为高维向量表示</li>
                  <li>• 索引构建：使用特殊的索引结构(如HNSW、IVF等)组织向量数据</li>
                  <li>• 相似度计算：使用余弦相似度等度量方法计算向量间的相似度,快速找出与查询向量最相似的向量集合</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">与上述的 Word2Vec 和 Transformer 架构中的向量相同点与差异是什么？</h4>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">相同点：</h5>
                    <p className="text-sm">都是以真实数数组和计算来求距离的数学规则。</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">不同点：</h5>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>语义粒度不同</strong>：向量数据库存的是"段落级语义"，模型内部的 Q/K/V 是"逐词、逐层的临时问答条"。</li>
                      <li>• <strong>生命周期不同</strong>：数据库里的向量通常把整段文本/网页/文档喂进 Encode得到一个 256～1024 维的"段落向量"，长期驻留在系统中且支持检索；Q/K/V 只在一次前向传播里存在几毫秒，算完即弃。</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">2.2 RAG：检索增强生成 (Retrieval-Augmented Generation)</h3>
              
              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold mb-4">解决什么问题？</h4>
                <ul className="space-y-3">
                  <li>
                    <strong>幻觉 (Hallucination)：</strong>
                    LLM的架构强调的是语言的"相似性"，并非事实的唯一"正确性"，AI容易编造不存在或错误的事实。
                  </li>
                  <li>
                    <strong>知识局限性：</strong>
                    LLM的训练数据是静态的，无法获取最新或特定领域知识。
                  </li>
                </ul>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <img src={image16} alt="RAG问题示例" className="w-1/2 mx-auto rounded-lg shadow-sm" />
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">RAG技术的核心思想：</h4>
                  <p className="text-sm">让大语言模型（LLM）在回答问题或生成内容前，先检索外部知识库获取相关信息，再基于这些信息生成答案，从而有效解决了大模型的知识时效性和幻觉问题，提高了回答的准确性和可靠性，特别适用于需要专业知识支持的垂直领域应用。</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold mb-4">RAG的工作流程：</h4>
                <ul className="space-y-2">
                  <li>• 查询向量化： 将用户问题转换为向量。</li>
                  <li>• 知识库检索： 在向量数据库中搜索与查询向量最相关的文档片段。</li>
                  <li>• 上下文融合： 将检索到的相关片段（作为"证据"）和原始问题一起，组织成提示词（Prompt）输入给LLM。</li>
                  <li>• 生成与优化： LLM基于融合后的上下文生成最终回答，可进行后处理优化。</li>
                </ul>
              </div>

              <div className="mb-6">
                <img src={image17} alt="RAG工作流程图" className="w-1/3 mx-auto rounded-lg shadow-sm" />
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">知识库构建</h4>
                <ul className="space-y-2">
                  <li>• 数据收集与预处理：从多源获取数据，进行清洗、去重和格式化</li>
                  <li>• 文本分块(Chunking)：将长文本分割成适当大小的块，以便于检索</li>
                  <li>• 向量化 (Embedding)：使用嵌入模型将文本块转换为向量表示</li>
                  <li>• 索引构建：使用特殊的索引结构组织向量数据</li>
                  <li>• 存储与检索优化：选择合适的向量数据库进行存储，优化检索效率</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">2.3 大模型微调 (Fine-tuning)</h3>
              
              <div className="bg-white p-6 rounded-lg mb-6">
                <p className="mb-4">在预训练好的大型基础模型基础上，使用特定领域或任务的数据集进行额外训练，调整模型参数，使其更擅长特定任务。</p>
                <p className="mb-4"><strong>为什么需要？</strong> 通用大模型在特定垂直领域（医疗、金融、法律）表现可能不够精准或专业。</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold mb-4">主要方法：</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">全参数微调 (Full Fine-tuning)：</h5>
                    <p className="text-sm">调整模型所有参数。效果最好，但计算成本超高。</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">参数高效微调 (Parameter-Efficient Fine-tuning, PEFT)：</h5>
                    <p className="text-sm">只训练新增的小部分参数，冻结原模型大部分参数。显著降低资源需求.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">LoRA (Low-Rank Adaptation)：</h5>
                    <p className="text-sm">为模型权重添加低秩矩阵进行更新。主流选择，效果好且节省资源。</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Prefix Tuning / P-Tuning：</h5>
                    <p className="text-sm">只在输入前添加可学习的"前缀"向量进行微调,仅调整连续提示词的嵌入，参数量极小。</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Adapter Tuning：</h5>
                    <p className="text-sm">在Transformer层中插入小型可训练的适配器模块。</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">QLoRA：</h5>
                    <p className="text-sm">LoRA + 量化技术，进一步降低内存需求，可在消费级显卡上运行。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">2.4 如何选择大模型微调还是本地知识库</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">维度</th>
                      <th className="border border-gray-300 p-3 text-left">微调</th>
                      <th className="border border-gray-300 p-3 text-left">RAG / 本地知识库</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">原理</td>
                      <td className="border border-gray-300 p-3">改写模型权重，把新知识"烙"进脑子里</td>
                      <td className="border border-gray-300 p-3">推理时先检索文档，再让模型组织答案</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">更新频率</td>
                      <td className="border border-gray-300 p-3">低 （重训/增量训才能更新）</td>
                      <td className="border border-gray-300 p-3">高 （文档秒级入库即可生效）</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">部署体积</td>
                      <td className="border border-gray-300 p-3">新模型单独打包；体积增长</td>
                      <td className="border border-gray-300 p-3">模型不变，只加数据库</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">推理速度</td>
                      <td className="border border-gray-300 p-3">快（纯模型前向）</td>
                      <td className="border border-gray-300 p-3">稍慢（检索 + 生成）</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">可溯源</td>
                      <td className="border border-gray-300 p-3">难引用具体出处</td>
                      <td className="border border-gray-300 p-3">可返回原文片段，便于审计</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">成本结构</td>
                      <td className="border border-gray-300 p-3">训练算力 + 存储 + MLOps</td>
                      <td className="border border-gray-300 p-3">向量库 + 检索带宽</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">典型价值</td>
                      <td className="border border-gray-300 p-3">特定语调 / 格式化输出 / domain jargon</td>
                      <td className="border border-gray-300 p-3">最新政策、合同、内部手册等"活"知识</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 第三章 */}
        <section data-section="chapter3" className="p-8 lg:p-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">3. 市场主流AI大模型与热门应用</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-purple-600 mb-6">3.1 国内外主流大模型</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">国外主流大模型</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left">模型（版本）</th>
                        <th className="border border-gray-300 p-3 text-left">公司 / 组织</th>
                        <th className="border border-gray-300 p-3 text-left">开源状况</th>
                        <th className="border border-gray-300 p-3 text-left">模态</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 ">GPT-4.1 / mini / nano</td>
                        <td className="border border-gray-300 p-3 ">OpenAI</td>
                        <td className="border border-gray-300 p-3">API 商业闭源</td>
                        <td className="border border-gray-300 p-3">文本 + 图像 + 音频</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 ">Gemini 2.5 Pro</td>
                        <td className="border border-gray-300 p-3 ">Google DeepMind</td>
                        <td className="border border-gray-300 p-3">API 商业闭源</td>
                        <td className="border border-gray-300 p-3">原生多模态（文本-音频-图像-视频）</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 ">Claude Opus 4 / Sonnet 4</td>
                        <td className="border border-gray-300 p-3 ">Anthropic</td>
                        <td className="border border-gray-300 p-3">API 商业闭源</td>
                        <td className="border border-gray-300 p-3">文本 +（试验性）图像</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Grok 4</td>
                        <td className="border border-gray-300 p-3">xAI</td>
                        <td className="border border-gray-300 p-3">API 商业闭源</td>
                        <td className="border border-gray-300 p-3">文本 + 图像（OCR 强）</td>
                      </tr>
                      <tr>                      
                        <td className="border border-gray-300 p-3 ">Llama 4 (Scout / Maverick)</td>
                        <td className="border border-gray-300 p-3 ">Meta AI</td>
                        <td className="border border-gray-300 p-3">源码可得，社区许可证</td>
                        <td className="border border-gray-300 p-3">多模态</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Mistral Medium 3 (25-05)</td>
                        <td className="border border-gray-300 p-3">Mistral AI</td>
                        <td className="border border-gray-300 p-3">商业 API；部分权重开源</td>
                        <td className="border border-gray-300 p-3">多模态</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Amazon Nova Pro</td>
                        <td className="border border-gray-300 p-3">AWS</td>
                        <td className="border border-gray-300 p-3">API 商业闭源</td>
                        <td className="border border-gray-300 p-3">多模态（文本-图像-视频）</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Command A (03-2025)</td>
                        <td className="border border-gray-300 p-3">Cohere</td>
                        <td className="border border-gray-300 p-3">API 商业闭源</td>
                        <td className="border border-gray-300 p-3">文本</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">DBRX Instruct</td>
                        <td className="border border-gray-300 p-3">Databricks</td>
                        <td className="border border-gray-300 p-3">开源 / Databricks OML</td>
                        <td className="border border-gray-300 p-3">文本</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">国内主流大模型</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left">模型（版本）</th>
                        <th className="border border-gray-300 p-3 text-left">公司 / 机构</th>
                        <th className="border border-gray-300 p-3 text-left">开源状况</th>
                        <th className="border border-gray-300 p-3 text-left">多模态</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 ">DeepSeek-V3 / R1</td>
                        <td className="border border-gray-300 p-3">DeepSeek</td>
                        <td className="border border-gray-300 p-3">权重开放</td>
                        <td className="border border-gray-300 p-3">文本</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 ">Qwen 2.5-1M / Omni</td>
                        <td className="border border-gray-300 p-3">阿里云通义</td>
                        <td className="border border-gray-300 p-3">权重与推理框架开放</td>
                        <td className="border border-gray-300 p-3">文本-图像-音频-视频</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">ERNIE 4.0 Turbo-128K</td>
                        <td className="border border-gray-300 p-3">百度文心</td>
                        <td className="border border-gray-300 p-3">API 闭源</td>
                        <td className="border border-gray-300 p-3">文本＋图像</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Hunyuan-Standard-256K / A13B</td>
                        <td className="border border-gray-300 p-3">腾讯混元</td>
                        <td className="border border-gray-300 p-3">A13B 权重开源，其余 API</td>
                        <td className="border border-gray-300 p-3">文本＋图像（Vision 版）</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Spark 4.0 Turbo-128K</td>
                        <td className="border border-gray-300 p-3">科大讯飞</td>
                        <td className="border border-gray-300 p-3">API 闭源</td>
                        <td className="border border-gray-300 p-3">文本＋语音</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Pangu 5.5</td>
                        <td className="border border-gray-300 p-3">华为云</td>
                        <td className="border border-gray-300 p-3">私有云 / API</td>
                        <td className="border border-gray-300 p-3">文本</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">ChatGLM-4-Long</td>
                        <td className="border border-gray-300 p-3">智谱 AI</td>
                        <td className="border border-gray-300 p-3">9B/32B 等权重开源</td>
                        <td className="border border-gray-300 p-3">文本（试验性图像）</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">SenseNova 5.0</td>
                        <td className="border border-gray-300 p-3">商汤科技</td>
                        <td className="border border-gray-300 p-3">API 闭源</td>
                        <td className="border border-gray-300 p-3">文本-图像</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Doubao 1.6 Pro-128K</td>
                        <td className="border border-gray-300 p-3">字节跳动</td>
                        <td className="border border-gray-300 p-3">API 闭源</td>
                        <td className="border border-gray-300 p-3">文本-图像-音频-视频</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">MiniMax-M1 / 01 系列</td>
                        <td className="border border-gray-300 p-3">MiniMax</td>
                        <td className="border border-gray-300 p-3">开源权重</td>
                        <td className="border border-gray-300 p-3">文本-图像</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Kimi 2.0</td>
                        <td className="border border-gray-300 p-3">月之暗面 (Moonshot AI)</td>
                        <td className="border border-gray-300 p-3">SaaS 闭源</td>
                        <td className="border border-gray-300 p-3">文本</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-purple-600 mb-6">3.2 提示词（Prompt）</h3>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold mb-4">样例背景："全家人下周要去海南旅游"</h4>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-700 mb-2">样例1：</h5>
                    <p className="italic">"全家去海南玩，帮我做一个详细攻略。"</p>
                  </div>
                  
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-700 mb-2">样例2：</h5>
                    <div className="text-sm space-y-2">
                      <p><strong>角色：</strong> 假设你是一位有10年海南带团经验的资深导游，熟悉海南深度游定制和各个年龄段游客需求。</p>
                      <p><strong>任务：</strong> 为我和我父母，外婆（上了年纪）4人设计5天海南环岛详细行程</p>
                      <p><strong>注意：</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>7月15日一早飞三亚，7月19日晚返程，预算中等</li>
                        <li>老人年纪大了，行程不能太累</li>
                        <li>家里人喜欢吃海鲜</li>
                        <li>需要安排潜水和水上节目</li>
                        <li>家里人都会开车，可以部分线路自驾</li>
                        <li>方案要包含酒店和交通信息和大致价格范围，酒店要干净和安静，最好是品牌连锁酒店</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="mb-4"><strong>通常好的提示词框架：角色 + 任务 + 约束条件。</strong></p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">角色定义需注意事项：</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left">场景</th>
                        <th className="border border-gray-300 p-3 text-left">是否建议定义角色</th>
                        <th className="border border-gray-300 p-3 text-left">原因说明</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">需深度专业知识（如本地导游）</td>
                        <td className="border border-gray-300 p-3 text-green-600 font-semibold">强烈建议</td>
                        <td className="border border-gray-300 p-3">激活领域知识库</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">需特定风格（如幽默讲解）</td>
                        <td className="border border-gray-300 p-3 text-blue-600 font-semibold">推荐</td>
                        <td className="border border-gray-300 p-3">锁定语言风格</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">跨领域创新需求</td>
                        <td className="border border-gray-300 p-3 text-red-600 font-semibold">不建议</td>
                        <td className="border border-gray-300 p-3">角色可能限制想象力</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">需求本身已极度明确具体</td>
                        <td className="border border-gray-300 p-3 text-gray-600 font-semibold">可选</td>
                        <td className="border border-gray-300 p-3">角色增益有限</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">角色与任务能力不匹配</td>
                        <td className="border border-gray-300 p-3 text-red-600 font-semibold">避免</td>
                        <td className="border border-gray-300 p-3">可能导致错误或低质内容</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-purple-600 mb-6">3.3 AI Agent</h3>
              
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <p>能够自主感知环境、制定计划、执行任务，调用工具，并适应变化根据结果继续推理，直到完成任务的智能系统</p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Agent生态热门产品：</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">产品</th>
                        <th className="border border-gray-300 p-2 text-left">提供方</th>
                        <th className="border border-gray-300 p-2 text-left">部署形态</th>
                        <th className="border border-gray-300 p-2 text-left">操作范式</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 ">AutoGPT</td>
                        <td className="border border-gray-300 p-2">Significant Gravitas（US）</td>
                        <td className="border border-gray-300 p-2">自托管 MIT</td>
                        <td className="border border-gray-300 p-2">Code-first CLI / Web</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 ">LangChain Agents</td>
                        <td className="border border-gray-300 p-2">LangChain Inc.（US）</td>
                        <td className="border border-gray-300 p-2">自托管 Apache-2.0</td>
                        <td className="border border-gray-300 p-2">Code-first (Python/JS)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 ">CrewAI</td>
                        <td className="border border-gray-300 p-2">crew.ai（US）</td>
                        <td className="border border-gray-300 p-2">云 + 本地双模</td>
                        <td className="border border-gray-300 p-2">Low-code (YAML/SDK)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 ">Dust</td>
                        <td className="border border-gray-300 p-2">Dust.tt（FR/US）</td>
                        <td className="border border-gray-300 p-2">SaaS / 私有 VPC</td>
                        <td className="border border-gray-300 p-2">可视化画布 + API</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">OpenAI Assistants API</td>
                        <td className="border border-gray-300 p-2">OpenAI（US）</td>
                        <td className="border border-gray-300 p-2">云托管 API</td>
                        <td className="border border-gray-300 p-2">Code-first REST/SDK</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 ">Manus</td>
                        <td className="border border-gray-300 p-2">Monica Pte Ltd（新加坡）</td>
                        <td className="border border-gray-300 p-2">纯 SaaS</td>
                        <td className="border border-gray-300 p-2">自然语</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">MiniMax-M1 / 01 系列</td>
                        <td className="border border-gray-300 p-2">MiniMax (北京)</td>
                        <td className="border border-gray-300 p-2">SaaS / 待开放私有化</td>
                        <td className="border border-gray-300 p-2">No-/Low-code + API</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Dify</td>
                        <td className="border border-gray-300 p-2">LangGenius（杭州）</td>
                        <td className="border border-gray-300 p-2">开源 + 云托管</td>
                        <td className="border border-gray-300 p-2">可视化 Canvas + API</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Coze</td>
                        <td className="border border-gray-300 p-2">字节跳动（北京）</td>
                        <td className="border border-gray-300 p-2">SaaS</td>
                        <td className="border border-gray-300 p-2">纯拖拽</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">AgentBuilder (千帆)</td>
                        <td className="border border-gray-300 p-2">百度智能云</td>
                        <td className="border border-gray-300 p-2">SaaS</td>
                        <td className="border border-gray-300 p-2">No-/Low-code</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">百炼 Agent 应用</td>
                        <td className="border border-gray-300 p-2">阿里云</td>
                        <td className="border border-gray-300 p-2">SaaS / 私有云</td>
                        <td className="border border-gray-300 p-2">零代码 GUI</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">元器 Agent Shop</td>
                        <td className="border border-gray-300 p-2">腾讯混元云</td>
                        <td className="border border-gray-300 p-2">SaaS</td>
                        <td className="border border-gray-300 p-2">No-code</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">AgentVerse</td>
                        <td className="border border-gray-300 p-2">清华等开源社区</td>
                        <td className="border border-gray-300 p-2">自托管 Apache-2.0</td>
                        <td className="border border-gray-300 p-2">Code-first (YAML)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-purple-600 mb-6">3.4 MCP协议</h3>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <p>MCP (Multi-Agent Collaboration Protocol) 协议是一种促进多智能体协作的标准化通信框架，它使不同AI系统能够高效协同工作。在垂直领域应用中，MCP协议通过标准化的消息格式、任务分配机制和状态同步方法，实现了复杂任务的分解与协作处理，大幅提升了AI系统的整体效能。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 第四章 */}
        <section data-section="chapter4" className="p-8 lg:p-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">4. 发展趋势与挑战</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-orange-600 mb-6">4.1 大模型之间的竞争</h3>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold mb-4">"堆参数"时代回顾</h4>
                <p>2020-2023：各大大模型公司等相继刷榜；大家公开喊出自己的 dense 参数量来展示肌肉，仅靠增加参数性价比迅速走低------训练成本、推理延迟、内存占用都成为各家之痛，而质量提升则趋于边际收益。</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">今天在比什么？</h4>
                <ul className="space-y-3">
                  <li>• 稀疏化 & MoE（只激活部分专家），一次只用少量活跃专家，推理成本接近中型模型，却保持超大容量</li>
                  <li>• 更长上下文,长上下文能力直接决定能否处理整本书、数小时视频，而跟总参量相关性不大</li>
                  <li>• 多模态统一，文字+图像+音频推理靠跨模态融合，模型架构与训练方式比参数多少更重要</li>
                  <li>• 开源高效中型模型，70 B 级别即可达到或逼近 GPT-4 水平，方便私有部署、量化到手机</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-orange-600 mb-6">4.2 发展趋势</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">技术升级：模型架构创新、多模态融合、高效训练/推理。</h4>
                  <ul className="space-y-2">
                    <li>• 工具链更完善：RAG、微调、向量数据库、智能体框架等技术将更易用、更强大，推动AI平民化</li>
                    <li>• 高效微调：LoRA、适配器调整等微调方法将进一步发展，使模型定制化成本更低</li>
                    <li>• 知识增强：RAG等检索增强生成技术将更加成熟，解决大模型的知识时效性和幻觉问题</li>
                    <li>• 模型架构创新：超越Transformer架构，更强大的多模态融合、更高效的训练/推理技术（降低门槛），降低计算资源需求，提高推理速度</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">能力突破：</h4>
                  <ul className="space-y-2">
                    <li>• 多模态融合：视觉、语言、音频等多种模态的深度融合将成为趋势，使AI系统能够更全面地理解和交互世界</li>
                    <li>• 智能体崛起：更能规划、执行复杂任务</li>
                    <li>• 随着制度与生态成熟，现有系统 / App 的交互方式将从"点按钮"转向"说需求"，功能像乐高一样组合</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">应用深化：医疗、金融、教育等垂直领域。</h4>
                  <p>AI深入千行百业（医疗、金融、教育、制造、文旅），解决具体业务痛点。举例来说，DeepMind 开发的 AlphaFold AI 已经在一年内破解了两亿种蛋白质结构，大大加速了新药研发。</p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">长远愿景：从ANI（Artificial Narrow Intelligence）通用人工智能AGI（Artificial General Intelligence）</h4>
                  <p>AGI 通用 AI（AGI，强人工智能）则指具有类似人类通才能力的 AI，可以胜任任何智力任务，灵活适应新情景，自主学习和推理。AGI 的目标是在各个领域都达到人类水平智能。</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-orange-600 mb-6">4.3 核心挑战</h3>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">伦理与治理：</h4>
                  <ul className="space-y-2">
                    <li>• 数据隐私与安全：确保海量训练数据合规，防止泄露滥用，数据污染</li>
                    <li>• 算法偏见与公平性：消除模型决策中的歧视和不公</li>
                    <li>• 透明度与可解释性：理解AI为何做出特定决策（"黑箱"问题），尤其在关键领域（医疗、司法）</li>
                    <li>• 责任归属：AI出错时，责任如何界定？（开发者？运营者？使用者？）</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">技术可靠性：</h4>
                  <ul className="space-y-2">
                    <li>• 幻觉问题： 虽然RAG缓解，但LLM产生虚假信息风险仍需警惕</li>
                    <li>• 数据依赖性： 模型效果高度依赖训练数据质量和多样性。"Garbage in, garbage out"</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">社会影响：</h4>
                  <ul className="space-y-2">
                    <li>• 产业转型升级：应用导向的AI发展将促使人工智能技术精准对接各产业具体需求，催生智能制造、智慧医疗等新模式新业态</li>
                    <li>• 就业结构变化：AI技术将替代部分重复性工作，同时创造新的就业机会和职业类型，推动劳动力市场结构性调整, 确保AI技术红利普惠，避免加剧社会不平等</li>
                    <li>• 教育模式革新：个性化学习将成为可能，教育资源分配更加均衡，终身学习成为常态</li>
                    <li>• 社会治理变革：AI技术将助力社会治理精细化、智能化，提高公共服务效率</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 移动端遮罩 */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
