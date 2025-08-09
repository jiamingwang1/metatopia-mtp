'use client'

export default function Home() {
  const projectHighlights = [
    {
      title: 'AI智能匹配',
      description: '基于机器学习的玩家匹配系统，确保公平竞技体验',
      icon: '🤖'
    },
    {
      title: '链上反作弊',
      description: '区块链技术保障游戏公正性，杜绝作弊行为',
      icon: '🛡️'
    },
    {
      title: '跨游戏资产',
      description: 'NFT资产可在多个游戏间流通使用',
      icon: '🎮'
    },
    {
      title: '真实价值',
      description: '游戏成就转化为真实经济收益',
      icon: '💎'
    }
  ]

  const keyData = [
    { label: '代币总量', value: '1,000,000,000 MTP' },
    { label: '社区成员', value: '50,000+' },
    { label: '合作伙伴', value: '25+' },
    { label: '游戏生态', value: '10+' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 overflow-hidden animated-bg">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}} />
        
        {/* Floating Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="particle"
              style={{
                left: `${(i * 5.26) % 100}%`,
                animationDelay: `${(i * 0.15) % 3}s`,
                animationDuration: `${3 + (i * 0.35) % 7}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 ring-1 ring-purple-500/20">
                🚀 下一代GameFi平台
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-glow animate-pulse">
                METATOPIA
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
              融合AI、电竞与链上经济的革命性GameFi平台，重新定义数字娱乐的价值创造
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => {
                  window.location.href = '/gamefi'
                }}
                className="btn-gaming glow-purple focus-gaming relative overflow-hidden group"
              >
                <span className="relative z-10">开始探索</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button 
                onClick={() => {
                  window.open('https://www.youtube.com/watch?v=demo', '_blank')
                }}
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 focus-gaming relative group"
              >
                <span className="group-hover:text-glow">观看演示</span> 
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Highlights */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text-gaming">
              核心优势
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              METATOPIA通过创新技术重新定义GameFi生态
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {projectHighlights.map((highlight, index) => (
                <div key={index} className="card-gaming group hover:scale-105 transition-all duration-300">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <span className="gradient-text">{highlight.title}</span>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{highlight.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Key Data Panel */}
      <section className="py-24 sm:py-32 bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
              关键数据
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              实时展示METATOPIA生态发展状况
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {keyData.map((data, index) => (
              <div key={index} className="card-gaming group hover:glow-cyan transition-all duration-300">
                <div className="text-3xl font-bold gradient-text-gaming group-hover:scale-110 transition-transform duration-300">
                  {data.value}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {data.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
              最新动态
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              关注METATOPIA的最新发展和里程碑
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'METATOPIA主网即将上线',
                description: '经过数月的开发和测试，METATOPIA主网将于下月正式上线，为用户带来完整的GameFi体验。',
                date: '2024年1月15日',
                category: '产品更新'
              },
              {
                title: '与顶级电竞战队达成合作',
                description: 'METATOPIA宣布与多个知名电竞战队建立合作关系，共同推进电竞生态建设。',
                date: '2024年1月10日',
                category: '合作伙伴'
              },
              {
                title: 'MTP代币经济模型发布',
                description: '详细的代币经济模型已发布，包括挖矿机制、质押奖励和治理权益等核心内容。',
                date: '2024年1月5日',
                category: '代币经济'
              }
            ].map((news, index) => (
              <article key={index} className="card-gaming group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {news.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-purple-500/10 px-3 py-1.5 font-medium text-purple-400 group-hover:bg-purple-500/20 transition-colors duration-300">
                    {news.category}
                  </span>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:gradient-text transition-all duration-300">
                    {news.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {news.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}