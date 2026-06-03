export interface Speaker {
  name: string;
  role: string;
  affiliation: string;
  status: string;
  bio: string;
  url?: string;
  avatar?: string;
}

export interface Organizer {
  name: string;
  affiliation: string;
  email: string;
  url: string;
  bio: string;
  avatar?: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
  details?: string;
}

export const INVITED_SPEAKERS: Speaker[] = [
  {
    name: "Stefano Ermon",
    role: "Associate Professor",
    affiliation: "Stanford University",
    status: "Confirmed in-person (Sydney preferred)",
    bio: "Stefano Ermon is an Associate Professor in the Department of Computer Science at Stanford University, where he is affiliated with the Stanford Artificial Intelligence Laboratory (SAIL) and a fellow of the Woods Institute for the Environment. His research focuses on machine learning, generative AI, probabilistic modeling, and robust decision-making under uncertainty, with strong emphasis on real-world societal and environmental applications. He is widely recognized for pioneering contributions to score-based generative modeling and diffusion models, as well as research on foundation models, computational sustainability, and AI for science. His work bridges core AI methodology with applications in climate, Earth systems, and scientific discovery, making his expertise highly relevant to emerging research on agentic AI for Earth observation.",
    url: "https://cs.stanford.edu/~ermon/",
    avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493919263/9DrfZuSabAu7vok4PSS7EX/speaker_stefano-VGkGHXZZiUUidfBmKHB8i5.webp"
  },
  {
    name: "Naoto Yokoya",
    role: "Professor & Team Director",
    affiliation: "The University of Tokyo / RIKEN",
    status: "Confirmed in-person (Sydney preferred)",
    bio: "Naoto Yokoya is a Professor at The University of Tokyo and Team Director at RIKEN. His research focuses on visual and spatial intelligence, developing intelligent systems that understand and reason about the physical and semantic structure of the real world from multimodal observations. His work lies at the intersection of computer vision, machine learning, remote sensing, and data fusion, with particular emphasis on Earth observation as a socially impactful domain for advancing AI. He has made influential contributions to hyperspectral imaging, multimodal data fusion, geospatial foundation models, disaster monitoring, and AI-driven Earth understanding. His recent work explores multimodal reasoning systems, geospatial generative AI, and foundation models for large-scale environmental and disaster applications. He is widely recognized as a leading researcher in geospatial AI and remote sensing machine learning.",
    url: "https://naotoyokoya.com/",
    avatar: "https://naotoyokoya.com/assets/img/yokoya24_390.webp"
  },
  {
    name: "Gui-Song Xia",
    role: "Hongyi Distinguished Professor & Acting Vice Dean",
    affiliation: "Wuhan University",
    status: "Confirmed in-person (Paris or Sydney)",
    bio: "Gui-Song Xia is a Hongyi Distinguished Professor at Wuhan University and currently serves as Acting Vice Dean of the School of Artificial Intelligence. His research focuses on computer vision, pattern recognition, photogrammetry, and remote sensing image understanding, with particular interests in aerial image analysis, geometric vision, and multimodal AI. He has published extensively in leading venues such as CVPR, ICCV, TPAMI, IJCV, and IEEE TGRS, and has contributed influential datasets and benchmarks widely used in Earth observation research. He is also known for advancing AI methods for aerial object detection, scene understanding, and geospatial intelligence.",
    url: "http://www.captain-whu.com/en/person/xiaguisong.html",
    avatar: "/manus-storage/xiaguisong-avatar_d6be9ecf.jpg"
  },
  {
    name: "Salman Khan",
    role: "Associate Professor & Adjunct Faculty",
    affiliation: "MBZUAI / Australian National University",
    status: "Confirmed in-person (Sydney)",
    bio: "Salman Khan is an Associate Professor in the Computer Vision Department at Mohamed bin Zayed University of Artificial Intelligence (MBZUAI) and an adjunct faculty member at the Australian National University. His research lies at the intersection of vision, language, and learning, with major contributions to multimodal learning, vision-language models, continual learning, open-world recognition, and robust AI systems. More recently, his work has increasingly focused on geospatial AI, AI for climate science, and Earth observation foundation models, including multimodal reasoning systems for remote sensing and environmental monitoring. He has published extensively in top AI venues including CVPR, ICCV, NeurIPS, ICML, and ICLR, and has contributed to influential projects such as GeoChat, Video-ChatGPT, and multilingual multimodal foundation models.",
    url: "https://salman-h-khan.github.io/",
    avatar: "https://salman-h-khan.github.io/images/salman.png"
  },
  {
    name: "Xiao Xiang Zhu",
    role: "Full Professor & Chair of Data Science in EO",
    affiliation: "Technical University of Munich",
    status: "Confirmed (Paris in-person, Sydney online)",
    bio: "Xiao Xiang Zhu (IEEE Fellow) is a Full Professor and Chair of Data Science in Earth Observation at Technical University of Munich. She is internationally recognized for her pioneering contributions to AI for Earth observation, multimodal geospatial foundation models, SAR image analysis, and large-scale urban Earth monitoring. Her research lies at the intersection of machine learning, remote sensing, and geospatial data science, with recent work focusing on foundation models and AI-driven Earth intelligence systems.",
    url: "https://www.asg.ed.tum.de/sipeo/team/zhu/",
    avatar: "/manus-storage/pasted_file_kl4MIb_xiaoxiangzhu_e7cf6643.png"
  },
  {
    name: "Devis Tuia",
    role: "Associate Professor",
    affiliation: "EPFL",
    status: "Tentative (Paris in-person)",
    bio: "Devis Tuia (IEEE Fellow) is an Associate Professor at École Polytechnique Fédérale de Lausanne, where he leads the Environmental Computational Science and Earth Observation Laboratory (ECEO). His research focuses on machine learning for Earth observation, geospatial foundation models, environmental monitoring, and AI for sustainability. He has made influential contributions to domain adaptation, self-supervised learning, weakly supervised learning, and foundation models for remote sensing. More recently, his work explores multimodal and generative AI systems for Earth observation, with applications in biodiversity monitoring, ecosystem understanding, and climate-related challenges.",
    url: "https://people.epfl.ch/devis.tuia?lang=en",
    avatar: "https://people.epfl.ch/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTI0MjAsImV4cCI6IjIwMjYtMDYtMDNUMTI6Mjg6MDQuNzI0WiIsInB1ciI6ImJsb2JfaWQifX0=--0d710c27f1816c5d641c39dc6b89b3d2d55f04a9/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fbGltaXQiOlszMDAsMzAwXX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--0e4cac8384c27a8ce16cc743e4688ad1c990158e/150680.jpg?lang=en"
  },
  {
    name: "Caleb Robinson",
    role: "Principal Research Scientist Manager",
    affiliation: "Microsoft AI for Good Research Lab",
    status: "Confirmed in-person (Seattle)",
    bio: "Caleb Robinson is a Principal Research Science Manager in the Microsoft AI for Good Research Lab where he co-leads the Geospatial ML research group and focuses on tackling large scale applied problems at the intersection of remote sensing and machine learning/computer vision.",
    url: "https://calebrob.com/",
    avatar: "/manus-storage/caleb_robinson_bd98c697.jpg"
  },
  {
    name: "Mengyue Yang",
    role: "Lecturer in Artificial Intelligence",
    affiliation: "University of Bristol",
    status: "Confirmed in-person (Sydney preferred)",
    bio: "Mengyue Yang is a Lecturer in Artificial Intelligence at the University of Bristol. Her research focuses on causality, reinforcement learning, multi-agent systems, world models, and large language model agents. She received her PhD in Computer Science from University College London, supervised by Professor Jun Wang. Her work has been published in leading AI venues including NeurIPS, ICML, ICLR, KDD, CVPR, SIGIR, and AAAI. She was selected for the AAAI 2026 New Faculty Highlights program and named a 2024 Rising Star in AI by KAUST.",
    url: "https://ymy4323460.github.io/ymy4323460.github.io/",
    avatar: "/manus-storage/mengyue_yang_0b59f49b.jpg"
  }
];

export const ORGANIZERS: Organizer[] = [
  {
    name: "Xiang Li",
    affiliation: "University of Bristol",
    email: "xiang92.li@bristol.ac.uk",
    url: "https://xiangli.ac.cn",
    bio: "Xiang Li is a Lecturer (Assistant Professor) at University of Bristol. His research lies at the intersection of computer vision and remote sensing. His recent work focuses on reinforcement fine-tuning, geospatial reasoning, and agentic AI for Earth observation, including multimodal foundation models capable of perception, reasoning, and decision-making. He has published extensively in leading AI and remote sensing venues such as CVPR, ICCV, NeurIPS, and contributed to influential projects including MiniGPT-4 and RSGPT. He also serves as organizer for multiple workshops at CVPR, including the Compositional 3D Vision Workshop at CVPR 2023/2024/2025, and as guest editor for several special issues, including IEEE GRSM special issues on vision-language models in remote sensing.",
    avatar: "/manus-storage/xiang_li_7e5e2dc3.jpg"
  },
  {
    name: "Tianjin Huang",
    affiliation: "University of Exeter",
    email: "t.huang4@exeter.ac.uk",
    url: "https://tianjinyellow.github.io/",
    bio: "Tianjin Huang is a Lecturer (Assistant Professor) at University of Exeter whose research focuses on building reliable and efficient AI systems for real-world applications. His research interests include reliable foundation models, with emphasis on efficient training, tuning, and compression under imperfect data conditions; agentic AI for robust and generalizable autonomous systems; and AI for science and biomedicine, particularly enabling large models in data-scarce and high-stakes domains. His recent work also explores multimodal foundation models and intelligent AI systems for scientific and geospatial applications.",
    avatar: "/manus-storage/pasted_file_LxhB5P_htj_c5166337.jpg"
  },
  {
    name: "Ronny Hänsch",
    affiliation: "German Aerospace Center (DLR)",
    email: "rww.haensch@gmail.com",
    url: "http://www.rhaensch.de/",
    bio: "Ronny Hänsch leads the Machine Learning Team in the Signal Processing Group of the SAR Technology Department at the Microwave and Radar Institute of the German Aerospace Center (DLR). His research interest is computer vision and machine learning with a focus on remote sensing. He has extensive experience in organizing remote sensing community competitions, serves as the GRSS representative within SpaceNet, and was the technical lead of the SpaceNet 8 Challenge. Ronny has served as Chair of the EarthVision Workshop at CVPR (2019–2026), Co-Chair of the Machine Learning for Remote Sensing Workshop at ICLR 2023, Co-Chair of the Machine Vision for Earth Observation and Environment Monitoring (MVEO) Workshop at BMVC 2023 and 2024, and Co-Chair of the 1st Workshop on Computer Vision for Earth Observation (CV4EO) Applications at WACV 2024.",
    avatar: "/manus-storage/rhaensch_73ab778c.png"
  },
  {
    name: "Xiuping Jia",
    affiliation: "University of New South Wales (UNSW Canberra)",
    email: "x.jia@adfa.edu.au",
    url: "https://www.unsw.edu.au/staff/xiuping-jia",
    bio: "Xiuping Jia is an Associate Professor at the School of Engineering and Technology, UNSW Canberra. Her research interests are remote sensing, hyperspectral image processing, pattern recognition, and spatial data analysis for remote sensing applications.",
    avatar: "/manus-storage/xiuping_jia_bed72a9c.png"
  },
  {
    name: "Danfeng Hong",
    affiliation: "Southeast University",
    email: "hongdf@aircas.ac.cn",
    url: "https://sites.google.com/view/danfeng-hong",
    bio: "Danfeng Hong is a Full Professor at Southeast University and a leading researcher in AI for remote sensing, multimodal Earth observation, and geospatial foundation models. His research spans hyperspectral imaging, multimodal learning, foundation models, and AI-driven Earth system understanding. He has extensive experience organizing major international workshops and conferences, serving as Program Chair for IEEE WHISPERS 2023, IEEE IGARSS 2020/2024, and organizer of the Workshop on Foundation and Large Vision Models in Remote Sensing at CVPR 2025.",
    avatar: "/manus-storage/danfeng_hong_92e702cf.jpg"
  },
  {
    name: "Weijia Li",
    affiliation: "Tsinghua University",
    email: "liweijia@sz.tsinghua.edu.cn",
    url: "https://liweijia.github.io/",
    bio: "Weijia Li is an Associate Professor at Tsinghua University working on computer vision, deep learning, and urban remote sensing. Her recent research focuses on large multimodal models, generative AI, and AI agents for geospatial understanding. She has contributed to influential works on cross-view geo-localization, multimodal reasoning benchmarks, synthetic image understanding, and urban scene intelligence, with publications in top-tier venues including CVPR, ICCV, NeurIPS, ICLR, and ICML.",
    avatar: "https://liweijia.github.io/assets/img/liweijia-2.png"
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { time: "09:00–09:10", activity: "Opening remarks and introduction", details: "Welcome address by organizers & workshop objectives" },
  { time: "09:10–09:55", activity: "Keynote Talk 1", details: "Pioneering insights on foundation models and geospatial intelligence" },
  { time: "09:55–10:40", activity: "Keynote Talk 2", details: "State-of-the-art developments in AI-driven Earth observation" },
  { time: "10:40–11:00", activity: "Coffee Break + Poster Setup", details: "Networking and preparing the interactive poster hall" },
  { time: "11:00–12:00", activity: "Accepted Oral Presentations", details: "Spotlight talks from leading authors of selected workshop papers" },
  { time: "12:00–13:30", activity: "Lunch + Poster Session", details: "Catered lunch and active discussions around posters" },
  { time: "13:30–14:15", activity: "Keynote Talk 3", details: "Deep dive into reinforcement learning and sequential decision-making in EO" },
  { time: "14:15–15:00", activity: "Keynote Talk 4", details: "Emerging trends in multimodal reasoning and simulation world models" },
  { time: "15:00–15:20", activity: "Coffee Break", details: "Afternoon refreshments and discussions" },
  { time: "15:20–16:05", activity: "Keynote Talk 5", details: "Visionary talk on planetary-scale AI agent coordination" },
  { time: "16:05–17:05", activity: "Panel Discussion", details: "Theme: 'Can Geospatial AI Agents Perceive, Reason, and Act Reliably?'\nPanelists: Stefano Ermon, Naoto Yokoya, Gui-Song Xia, Salman Khan, Mengyue Yang" },
  { time: "17:05–17:15", activity: "Closing Remarks", details: "Summary of key takeaways and future community plans" }
];
