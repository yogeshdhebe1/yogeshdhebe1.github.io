export const profile = {
  name: 'Yogesh Dhebe', full: 'Yogesh Raju Dhebe', location: 'Pune, Maharashtra, India',
  resume: '/resume/Yogesh_Dhebe_Resume.pdf', email: 'yogeshdhebe.scoe.entc@gmail.com',
}
export const links = [
  { label: 'GitHub', href: 'https://github.com/yogeshdhebe1', handle: 'yogeshdhebe1' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yogeshdhebe', handle: 'in/yogeshdhebe' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/yogeshdhebe01/', handle: 'yogeshdhebe01' },
  { label: 'Email', href: `mailto:${profile.email}`, handle: profile.email },
]
export const nav = [['About', '#about'], ['Work', '#work'], ['Experience', '#experience'], ['Skills', '#skills'], ['Contact', '#contact']]
export const marquee = ['Enterprise Apps', 'Generative AI', 'RAG', 'AI Agents', 'Computer Vision', 'FastAPI', 'React', 'Firebase', 'IoT', 'Robotics', 'NLP']
export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript', 'SQL'] },
  { group: 'AI / ML', items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Generative AI', 'LLMs', 'RAG', 'AI Agents'] },
  { group: 'Libraries & frameworks', items: ['TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn', 'Flask', 'FastAPI', 'React.js'] },
  { group: 'Backend & data', items: ['REST APIs', 'MySQL', 'Firebase'] },
  { group: 'Cloud & AI APIs', items: ['Google Gemini API', 'AWS S3', 'Firebase'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Postman'] },
  { group: 'Also', items: ['Web Scraping', 'IoT', 'Robotics', 'API Integration'] },
]
export const featured = {
  title: 'LearnAge', kind: 'Smart school management platform', role: 'Full Stack Developer — backend & system design',
  desc: 'One system that connects students, parents, teachers and administrators: attendance, homework, communication and live monitoring, with AI features built in.',
  tech: ['React.js', 'Firebase', 'Python', 'Flask', 'Gemini API'], live: 'https://learn-age.vercel.app/',
  views: {
    Student: ['Student dashboard', 'Homework tracking', 'AI-powered capabilities'],
    Parent: ['Parent dashboard', 'Parent–teacher communication', 'Real-time student monitoring'],
    Teacher: ['Teacher dashboard', 'Attendance management', 'Homework management'],
    Admin: ['Admin dashboard', 'Centralised school system', 'Attendance and homework oversight'],
  },
}
export const projects = [
  { title: 'VisionX', kind: 'AI smart rover with robotic arm', role: 'IoT & AI Developer',
    desc: 'A rover that sees, decides and moves: computer vision and sensors feeding an AI decision layer.',
    features: ['Object detection', 'Obstacle avoidance', 'Camera monitoring', 'Sensor integration', 'Gemini API + Hugging Face models'],
    tech: ['Python', 'OpenCV', 'Raspberry Pi', 'Arduino', 'ESP32', 'Gemini API', 'Hugging Face'] },
  { title: 'InterviewAI Pro', kind: 'Interview preparation platform',
    desc: 'Reads your resume and runs a personalised technical and HR interview, then scores how it went.',
    features: ['Resume parsing', 'Voice answers via Whisper', 'Technical, communication and confidence scores', 'Interview decision analysis'],
    tech: ['Python', 'FastAPI', 'React', 'MongoDB', 'Gemini API', 'Whisper'] },
  { title: 'IoT Weather Monitoring', kind: 'ESP32 sensing with a live web dashboard',
    desc: 'ESP32 sensors push readings to Firebase and a web app shows them in real time.',
    features: ['Temperature, humidity, pressure', 'Rain detection', 'Realtime Firebase data'],
    tech: ['ESP32', 'MicroPython', 'Firebase RTDB', 'DHT22', 'BMP280', 'SSD1306 OLED'], live: 'https://wether-app-drab.vercel.app/' },
  { title: 'MedAssist AI', kind: 'Conversational healthcare assistant',
    desc: 'A conversational assistant with an AI-ready backend. It supports general information and does not diagnose.',
    features: ['LLM-based conversation', 'RAG-ready architecture', 'FastAPI backend'],
    tech: ['Python', 'FastAPI', 'React', 'LLMs', 'RAG'] },
]
export const experience = {
  role: 'IoT & AI Development Intern', org: 'Incubators, Pune', when: 'Jan 2026 – Feb 2026', type: 'On-site',
  points: [
    ['Hardware and software', 'Connected sensors to software on Raspberry Pi, Arduino and ESP32.'],
    ['AI integration', 'Wired in AI models and APIs, including Gemini and Hugging Face models.'],
    ['Quality', 'Testing, debugging and system validation across hardware and software.'],
  ],
}
export const services = [
  ['Enterprise applications', 'Role-based, multi-user web systems with dashboards, REST APIs and a structured backend, like LearnAge.'],
  ['AI applications', 'LLM, RAG and agent features wrapped in a usable product.'],
  ['Full-stack products', 'React front ends with FastAPI or Flask backends and Firebase or MySQL.'],
  ['Computer vision', 'Detection and monitoring pipelines with OpenCV.'],
  ['IoT and automation', 'Sensor-driven systems on ESP32, Arduino and Raspberry Pi.'],
]
export const education = [
  { title: 'B.E. Electronics & Telecommunication', where: 'Sinhgad College of Engineering', note: 'Expected 2027 · CGPA 8.27' },
  { title: 'Diploma, Electronics & Telecommunication', where: 'Sou. Venutai Chavan Polytechnic', note: '84.71%' },
]
