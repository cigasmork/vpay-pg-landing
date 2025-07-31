export type Language = 'en' | 'ko';

export interface Content {
  header: {
    title: string;
    nav: {
      why: string;
      services: string;
      team: string;
      tech: string;
      roadmap: string;
      contact: string;
    }
  };
  hero: {
    supertitle: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  stats: {
    title: string;
    items: {
      value: number;
      label: string;
      unit: string;
      description: string;
    }[];
  };
  why: {
    title: string;
    subtitle: string;
    points: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  service: {
    title: string;
    subtitle: string;
    merchants: {
      title: string;
      description: string;
      features: { text: string, icon: string }[];
    };
    consumers: {
      title: string;
      description: string;
      features: { text: string, icon: string }[];
    };
  };
  partners: {
    title: string;
    subtitle: string;
    logos: { name: string, icon: string }[];
  };
  team: {
    title: string;
    subtitle: string;
    departments: {
      name: string;
      description: string;
      icon: string;
    }[];
  };
  tech: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  roadmap: {
    title: string;
    subtitle: string;
    steps: {
      phase: string;
      title: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      email: string;
      subject: string;
      content: string;
      submit: string;
      loading: string;
      success: string;
      error: string;
    };
  };
}