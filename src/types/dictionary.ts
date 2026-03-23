export interface Dictionary {
  nav: {
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    intro: string;
    scroll: string;
  };
  statement: {
    text: string;
    body: string;
  };
  services: {
    title: string;
    cta: string;
    ctaDesc: string;
    uxui: {
      title: string;
      desc: string;
      tags: string[];
    };
    bx: {
      title: string;
      desc: string;
      tags: string[];
    };
    edit: {
      title: string;
      desc: string;
      tags: string[];
    };
  };
  projects: {
    title: string;
    all: string;
    uxui: string;
    bx: string;
    edit: string;
    viewProject: string;
  };
  about: {
    title: string;
    bio: string;
    yearsExp: string;
    projectsDone: string;
    categories: string;
    viewMore: string;
    downloadResume: string;
    skills: string;
    experience: string;
  };
  contact: {
    title: string;
    cta: string;
    ctaDesc: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    success: string;
    phone: string;
  };
  footer: {
    copyright: string;
  };
  work: {
    client: string;
    category: string;
    year: string;
    role: string;
    prev: string;
    next: string;
    backToList: string;
  };
}
