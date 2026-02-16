import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      degree: 'S1 Teknik Informatika',
      institution: 'Universitas Upi YPTK Padang',
      period: '2023 - 2027',
      description: 'Focus on Software Engineering, Web Development, and Artificial Intelligence',
      gpa: 'GPA: 3.8/4.0',
    },
    {
      degree: 'SMA IPA',
      institution: 'SMA Negeri 4 Padang',
      period: '2020 - 2023',
      description: 'Science major with focus on Mathematics and Physics',
      gpa: 'Average: 90/100',
    },
    {
      degree: 'SMP',
      institution: 'SMP Negeri 17 Padang',
      period: '2017 - 2020',
      description: 'Explore the world of Physics and Mathematics through programming creativity.',
      gpa: 'Average: 90/100',
    },
    {
      degree: 'SD',
      institution: 'SD Negeri 06 Padang',
      period: '2012 - 2017',
      description: 'Connecting scientific logic with technology to build the future',
      gpa: 'Average: 90/100',
    },
  ];

  const experience = [
    {
      title: 'Data Analytics Participant',
      company: 'IBM SKILLSBUILD x HACKTIV8',
      period: 'Sep 2025 - Okt 2025',
      description:
        'Explored the fundamentals of Data Analytics, focusing on data cleaning, visualization, and statistical analysis. Learned to transform raw data into actionable insights using industry-standard tools and methodologies provided by IBM.',
      achievements: [
        'Successfully analyzed complex datasets to identify key trends and business patterns.',
    'Developed interactive data visualizations and dashboards to simplify data interpretation.',
    'Applied statistical models to provide data-driven recommendations for real-world case studies.',
      ],
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'Jan 2023 - Present',
      description:
        'Building custom websites and web applications for small businesses and startups.',
      achievements: [
        'Completed 10+ client projects',
        'Maintained 5-star rating',
        'Generated $5000+ in revenue',
      ],
    },
    {
      title: 'Programming Tutor',
      company: 'Campus Learning Center',
      period: 'Sep 2022 - Dec 2023',
      description:
        'Taught programming fundamentals to junior students. Conducted workshops on web development.',
      achievements: [
        'Mentored 50+ students',
        'Organized 5 technical workshops',
        'Achieved 95% student satisfaction',
      ],
    },
  ];

  const certifications = [
    {
      title: 'Data Classification and Summarization using IBM Granite',
      issuer: 'IBM SKILLSBUILD x HACKTIV8',
      date: '2025',
    },
    {
      title: 'React Developer Professional Certificate',
      issuer: 'Meta',
      date: '2023',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: '2023',
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'HackerRank',
      date: '2022',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perjalanan pendidikan dan pengalaman profesional saya
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{edu.description}</p>
                <p className="text-sm font-semibold text-blue-600">{edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-cyan-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                    <p className="text-cyan-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <Award className="w-10 h-10 text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{cert.title}</h4>
                <p className="text-xs text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-xs text-blue-600 font-semibold">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
