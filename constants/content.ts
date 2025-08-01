import type { Content, Language } from '../types';

export const content: Record<Language, Content> = {
  ko: {
    header: {
      title: 'Project VPAY PG',
      nav: {
        why: '필요성',
        services: '서비스',
        team: '팀',
        tech: '기술',
        roadmap: '로드맵',
        contact: '문의',
      }
    },
    hero: {
      supertitle: '대한민국 디지털 금융의 새로운 미래',
      title: 'VPAY PG 프로젝트',
      subtitle: '안전하고 신뢰할 수 있는 디지털 자산 결제 인프라를 구축하여, 웹3.0 시대의 혁신을 선도합니다.',
      cta: '더 알아보기'
    },
    stats: {
      title: '대한민국 시장의 거대한 기회',
      items: [
        { value: 1600, label: '만+', unit: '', description: '암호화폐 투자 인구' },
        { value: 31, label: '%', unit: '', description: '세계 최고 수준 도입률' },
        { value: 1.3, label: '조', unit: '달러', description: '디지털 결제 시장 규모' },
        { value: 8.14, label: '%', unit: '', description: '연평균 결제 시장 성장률' }
      ]
    },
    why: {
      title: '왜 VPAY PG가 필요한가?',
      subtitle: '디지털 자산의 잠재력을 현실 경제와 연결할 때입니다.',
      points: [
        {
          icon: 'MarketGap',
          title: '결제 인프라의 부재',
          description: '높은 암호화폐 보유율에도 불구하고, 실제 상거래에서 사용할 수 있는 결제 인프라가 부족하여 디지털 자산의 활용이 제한적입니다.'
        },
        {
          icon: 'GlobalStandard',
          title: '글로벌 경쟁력 확보',
          description: '미국의 GENIUS Act 등 글로벌 시장은 제도권 편입을 가속화하고 있습니다. 한국도 독자적인 표준을 정립하여 경쟁력을 강화해야 합니다.'
        },
        {
          icon: 'UserNeeds',
          title: '소비자와 판매자의 니즈',
          description: '소비자는 간편한 결제를, 판매자는 낮은 수수료와 변동성 위험이 없는 정산을 원합니다. 기존 시스템은 이 두 가지를 모두 만족시키지 못합니다.'
        }
      ]
    },
    service: {
      title: '제공 서비스',
      subtitle: '가맹점과 소비자 모두를 위한 혁신적인 결제 솔루션',
      merchants: {
        title: '가맹점 대상 서비스',
        description: '복잡성은 줄이고, 가능성은 넓힙니다.',
        features: [
          { text: '주요 이커머스 플랫폼 플러그인 및 범용 API 제공', icon: 'ApiIcon'},
          { text: '암호화폐-원화 맞춤형 정산 솔루션 지원', icon: 'SettlementIcon'},
          { text: 'POS 연동, 이메일 청구 등 온/오프라인 결제 환경 지원', icon: 'PosIcon'},
          { text: '기존 PG사 대비 혁신적으로 낮은 수수료', icon: 'LowFeeIcon'}
        ]
      },
      consumers: {
        title: '소비자 대상 서비스',
        description: '가장 간편하고 안전한 디지털 자산 결제 경험',
        features: [
          { text: '개인 디지털 자산 지갑을 통한 직관적인 결제 프로세스', icon: 'WalletIcon'},
          { text: '복잡한 중간 과정 없이 몇 번의 클릭만으로 결제 완료', icon: 'ClickIcon'},
          { text: '강력한 보안 시스템을 통한 안전한 자산 보호', icon: 'SecurityShieldIcon'},
          { text: '다양한 디지털 자산 활용 및 결제 지원', icon: 'AssetIcon'}
        ]
      }
    },
    partners: {
        title: '신뢰할 수 있는 파트너 및 기술',
        subtitle: '최고의 기술 스택과 파트너십을 통해 안정적인 서비스를 제공합니다.',
        logos: [
            { name: 'Upbit', icon: 'UpbitIcon' },
            { name: 'Bithumb', icon: 'BithumbIcon' },
            { name: 'Coinone', icon: 'CoinoneIcon' },
            { name: 'Korbit', icon: 'KorbitIcon' },
            { name: 'Kakaobank', icon: 'KakaobankIcon' },
            { name: 'Kbank', icon: 'KbankIcon' },
        ]
    },
    team: {
      title: '팀의 역량과 전문성',
      subtitle: '각 분야 최고의 전문가들이 신뢰의 아키텍처를 구축합니다.',
      departments: [
        { name: '기술개발부문', description: '안정적인 멀티체인 노드, HSM 보안, 실시간 정산 시스템을 포함한 최첨단 PG 인프라를 개발합니다.', icon: 'TechDevIcon' },
        { name: '통합리스크관리부문', description: 'ISMS, AML/KYC, 트래블룰 등 복잡한 금융 규제를 완벽히 준수하는 컴플라이언스 체계를 설계하고 운영합니다.', icon: 'RiskIcon' },
        { name: '경영지원총괄부문', description: '인사, 재무, 홍보 등 사업의 성공을 위한 모든 지원을 총괄하여 시너지를 창출합니다.', icon: 'SupportIcon' },
        { name: '사업/SI부문', description: '이커머스, NFT, 금융 등 다양한 산업 분야의 파트너십을 통해 생태계를 확장하고 혁신적인 비즈니스 모델을 발굴합니다.', icon: 'BusinessIcon' }
      ]
    },
    tech: {
      title: '핵심 기술 및 아키텍처',
      subtitle: '확장성, 보안, 규제 준수를 모두 만족시키는 엔터프라이즈급 솔루션',
      items: [
        { icon: 'Microservices', title: '마이크로서비스 아키텍처', description: 'RedotPay와 Mercuryo의 장점을 결합하여, 크립토 카드와 가맹점 결제를 동시에 지원하는 유연하고 확장 가능한 시스템을 구축합니다.' },
        { icon: 'Security', title: 'HSM 기반 보안 및 컴플라이언스', description: 'FIPS 140-2 Level 3 등급의 HSM 키 관리, 90% 이상의 콜드 스토리지, 멀티시그 지갑, PCI DSS Level 1 준수로 최고 수준의 보안을 보장합니다.' },
        { icon: 'Scalability', title: '대규모 트래픽 처리 설계', description: '초당 10,000+ 트랜잭션 처리, 200ms 미만의 API 응답 시간, 99.95% 가동 시간(SLA)을 목표로 설계되었습니다.' },
        { icon: 'Compliance', title: '규제 준수 자동화', description: 'Chainalysis, Elliptic 등 블록체인 분석 도구를 통합하고 자동화된 KYC/AML 시스템을 통해 국내외 트래블룰을 완벽히 준수합니다.' }
      ]
    },
    roadmap: {
      title: '프로젝트 로드맵',
      subtitle: '단계별 실행 계획을 통해 한국 디지털 자산 결제 시장의 표준을 만들어갑니다.',
      steps: [
        { phase: '1단계', title: '규제 기반 구축', description: '금융규제 샌드박스 승인 확보, 핵심 은행 파트너십 구축 및 비트코인/이더리움 기반의 MVP 결제 게이트웨이 개발.' },
        { phase: '2단계', title: 'PG 서비스 공식 출시', description: '크립토-원화 결제 게이트웨이 정식 출시, 주요 이커머스 플랫폼 연동 및 포괄적인 사기 탐지 시스템 도입.' },
        { phase: '3단계', title: '카드 통합 및 생태계 확장', description: '주요 카드사와의 파트너십을 통한 Visa/Mastercard 크립토 카드 발급 및 모바일 앱, POS 시스템 통합.' },
        { phase: '4단계', title: '시장 지배력 강화', description: '오프라인 POS 솔루션 확대, 게임 플랫폼 및 국제 결제 통합을 통해 B2B 시장을 선도하고 시장 표준을 정립.' }
      ]
    },
    contact: {
      title: '문의하기',
      subtitle: 'Project VPAY PG와의 협력 기회에 대해 논의하고 싶으신가요? 메시지를 남겨주세요.',
      form: {
        email: '이메일',
        subject: '제목',
        content: '내용',
        submit: '메시지 보내기',
        loading: '전송 중...',
        success: '메시지가 성공적으로 전송되었습니다.',
        error: '전송에 실패했습니다. 다시 시도해주세요.'
      }
    }
  },
  en: {
    header: {
      title: 'Project VPAY PG',
      nav: {
        why: 'Why',
        services: 'Services',
        team: 'Team',
        tech: 'Technology',
        roadmap: 'Roadmap',
        contact: 'Contact',
      }
    },
    hero: {
      supertitle: 'The New Future of Digital Finance in Korea',
      title: 'VPAY PG Project',
      subtitle: 'Building a secure and reliable digital asset payment infrastructure to lead the innovation of the Web 3.0 era.',
      cta: 'Learn More'
    },
     stats: {
      title: 'A Massive Opportunity in the Korean Market',
      items: [
        { value: 16, label: 'M+', unit: '', description: 'Crypto Investors' },
        { value: 31, label: '%', unit: '', description: 'World-Leading Adoption Rate' },
        { value: 1.3, label: 'T', unit: 'USD', description: 'Digital Payment Market Size' },
        { value: 8.14, label: '%', unit: '', description: 'Annual Payment Market Growth' }
      ]
    },
    why: {
      title: 'Why is VPAY PG Needed?',
      subtitle: 'It is time to connect the potential of digital assets with the real economy.',
      points: [
        {
          icon: 'MarketGap',
          title: 'Lack of Payment Infrastructure',
          description: 'Despite high cryptocurrency ownership, the lack of payment infrastructure for real-world transactions limits the use of digital assets.'
        },
        {
          icon: 'GlobalStandard',
          title: 'Securing Global Competitiveness',
          description: 'The global market is accelerating institutionalization, like the US GENIUS Act. Korea must establish its own standards to enhance competitiveness.'
        },
        {
          icon: 'UserNeeds',
          title: 'Needs of Consumers and Merchants',
          description: 'Consumers want simple payments, while merchants want low fees and settlement without volatility risk. Existing systems fail to satisfy both.'
        }
      ]
    },
    service: {
      title: 'Our Services',
      subtitle: 'Innovative payment solutions for both merchants and consumers.',
      merchants: {
        title: 'For Merchants',
        description: 'Reducing complexity, expanding possibilities.',
        features: [
          { text: 'Plugins for major e-commerce platforms and a universal API.', icon: 'ApiIcon'},
          { text: 'Instant settlement in KRW, eliminating crypto price volatility risk.', icon: 'SettlementIcon'},
          { text: 'Support for both online and offline payments, including POS and email invoicing.', icon: 'PosIcon'},
          { text: 'Significantly lower fees compared to traditional payment gateways.', icon: 'LowFeeIcon'}
        ]
      },
      consumers: {
        title: 'For Consumers',
        description: 'The simplest and most secure digital asset payment experience.',
        features: [
          { text: 'Intuitive payment process using your personal digital asset wallet.', icon: 'WalletIcon'},
          { text: 'Complete payments in just a few clicks without complex intermediate steps.', icon: 'ClickIcon'},
          { text: 'Secure asset protection through a robust security system.', icon: 'SecurityShieldIcon'},
          { text: 'Support for various digital assets for payment.', icon: 'AssetIcon'}
        ]
      }
    },
    partners: {
        title: 'Trusted Partners & Technologies',
        subtitle: 'We provide stable services through the best technology stack and partnerships.',
        logos: [
            { name: 'Upbit', icon: 'UpbitIcon' },
            { name: 'Bithumb', icon: 'BithumbIcon' },
            { name: 'Coinone', icon: 'CoinoneIcon' },
            { name: 'Korbit', icon: 'KorbitIcon' },
            { name: 'Kakaobank', icon: 'KakaobankIcon' },
            { name: 'Kbank', icon: 'KbankIcon' },
        ]
    },
    team: {
      title: "Team's capabilities and expertise",
      subtitle: 'Top experts in each field are building an architecture of trust.',
      departments: [
        { name: 'Technology Development Division', description: 'Develops cutting-edge PG infrastructure, including stable multi-chain nodes, HSM security, and real-time settlement systems.', icon: 'TechDevIcon' },
        { name: 'Integrated Risk & Compliance Division', description: 'Designs and operates a compliance framework that fully adheres to complex financial regulations like ISMS, AML/KYC, and the Travel Rule.', icon: 'RiskIcon' },
        { name: 'Management Support Division', description: 'Creates synergy by overseeing all support functions essential for business success, including HR, finance, and public relations.', icon: 'SupportIcon' },
        { name: 'Business & SI Division', description: 'Expands the ecosystem and discovers innovative business models through partnerships in various industries like e-commerce, NFT, and finance.', icon: 'BusinessIcon' }
      ]
    },
    tech: {
      title: 'Core Technology & Architecture',
      subtitle: 'An enterprise-grade solution that satisfies scalability, security, and regulatory compliance.',
      items: [
        { icon: 'Microservices', title: 'Microservices Architecture', description: 'Combines the strengths of RedotPay and Mercuryo to build a flexible and scalable system that supports both crypto cards and merchant payments.' },
        { icon: 'Security', title: 'HSM-based Security & Compliance', description: 'Ensures top-tier security with FIPS 140-2 Level 3 HSM key management, >90% cold storage, multi-sig wallets, and PCI DSS Level 1 compliance.' },
        { icon: 'Scalability', title: 'High-Throughput Design', description: 'Designed to handle 10,000+ transactions per second, with API response times under 200ms and a 99.95% uptime SLA.' },
        { icon: 'Compliance', title: 'Automated Regulatory Adherence', description: 'Fully complies with domestic and international Travel Rules by integrating blockchain analysis tools like Chainalysis and Elliptic with an automated KYC/AML system.' }
      ]
    },
    roadmap: {
      title: 'Project Roadmap',
      subtitle: 'Creating the standard for the Korean digital asset payment market through a phased execution plan.',
      steps: [
        { phase: 'Phase 1', title: 'Regulatory Foundation', description: 'Secure approval for the financial regulatory sandbox, establish key banking partnerships, and develop an MVP payment gateway for Bitcoin/Ethereum.' },
        { phase: 'Phase 2', title: 'Official PG Service Launch', description: 'Officially launch the crypto-to-fiat payment gateway, integrate with major e-commerce platforms, and implement a comprehensive fraud detection system.' },
        { phase: 'Phase 3', title: 'Card Integration & Ecosystem Expansion', description: 'Issue Visa/Mastercard crypto cards through partnerships with major card companies and integrate mobile app and POS systems.' },
        { phase: 'Phase 4', title: 'Market Dominance', description: 'Expand offline POS solutions, integrate with gaming platforms and international payments to lead the B2B market and establish the industry standard.' }
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Interested in collaborating with Project VPAY PG? Leave us a message.',
      form: {
        email: 'Email',
        subject: 'Subject',
        content: 'Message',
        submit: 'Send Message',
        loading: 'Sending...',
        success: 'Message sent successfully.',
        error: 'Failed to send message. Please try again.'
      }
    }
  }
};