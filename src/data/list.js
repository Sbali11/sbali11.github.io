// Research organized by publication type
export const researchByCategory = {
    "Conference Papers": [
        {
            "name": "Evidotes: Integrating Scientific Evidence and Anecdotes to Support Uncertainties Triggered by Peer Health Posts",
            "venue": "CHI 2026",
            "org": <><strong>Shreya Bali</strong>, Riku Arakawa, Peace Odiase, Sherry Wu, Mayank Goel</>,
            "tags": {
                "Human Computer Interaction": [],
                "Health": [],
                "Applied ML": []
            },
            "year": "2024-2025",
            "website": "https://evidotes.vercel.app/",
            "awards": "Best Paper Honorable Mention (Top 5% of submissions)",
        },
        {
            "name": "CalmReminder: A Design Probe for Parental Engagement with Children with Hyperactivity, Augmented by Real-Time Motion Sensing with a Watch",
            "venue": "CHI 2026",
            "org": <>Riku Arakawa*, <strong>Shreya Bali*</strong>, Anupama Sitaraman, Woosuk Seo, Sam Shaaban, Oliver Lindheim, Traci M. Kennedy, Mayank Goel</>,
            "tags": {
                "Human Computer Interaction": [],
                "Applied ML": [],
                "Ubiquitous Computing": [],
                "Health": []
            },
            "year": "2024-2025",
        },

        {
            "name": "Nooks: Social Spaces to Lower Hesitations in Interacting with New People at Work",
            "venue": "CHI 2023",
            "org": <><strong>Shreya Bali</strong>, Pranav Khadpe, Geoff Kaufman, Chinmay Kulkarni</>,
            "tags": {
                "Human Computer Interaction": [],
                "Social Computing": ["diversity/inclusion"]
            },
            "year": "2021-2022",
            "paper": "https://programs.sigchi.org/chi/2023/program/content/96105",
            "article": "https://www.cs.cmu.edu/news/2023/chi2023-nooks",
            "website": "https://nooks.vercel.app/",
            "code": "https://github.com/Sbali11/Nooks",
            "awards": "Best Paper Honorable Mention (Top 5% of submissions)",
        },
    ],
    "Journal Papers": [
        {
            "name": "Integration of botanicals in contemporary medicine: road blocks, checkpoints and go-ahead signals",
            "venue": "Integrative Medicine Research 2018",
            "org": <>Neha Arora Chugh, <strong>Shreya Bali</strong>, Ashwani Koul</>,
            "tags": {
                "Human Computer Interaction": [],
                "Health": [],
            },
            "year": "2018",
            "paper": "https://www.sciencedirect.com/science/article/pii/S2213423018300027",
        },
    ],
    "Workshop Papers": [
        {
            "name": "Context-Aware Assistant for Integrated Home Care: Empowering Elderly Patients and Their Care Networks",
            "venue": "CHI 2025 Workshop",
            "org": <>Riku Arakawa, <strong>Shreya Bali</strong>, Mayank Goel</>,
            "tags": {
                "Human Computer Interaction": [],
                "Health": [],
                "Applied ML": [],
                "Ubiquitous Computing": []
            },
            "year": "2024-2025",
            "paper": "https://hcii.cmu.edu/news/2025/chi2025-workshop-aging-in-place",
        },
        {
            "name": "Prediction of Boreal Peatland Fires in Canada using Spatio-Temporal Methods",
            "venue": "ICML 2021 Climate Change Workshop",
            "tags": {
                "Human Computer Interaction": [],
                "Applied ML": [],
                "Socially Relevant Work": ["climate change"]
            },
            "org": <><strong>Shreya Bali*</strong>, Sydney Zheng*, Akshina Gupta*, Yue Wu*, Blair Chen*, Anirban Chowdhury*, Justin Khim, Reid Simmons</>,
            "year": "2020-2021",
            "code": "https://github.com/Sbali11/PeatlandFirePrediction",
            "poster": "https://drive.google.com/file/d/1BE8EV07vt-nwMyFeo2lV4h04sxqgZ3Ml/view?usp=sharing",
            "paper": "https://s3.us-east-1.amazonaws.com/climate-change-ai/papers/icml2021/12/paper.pdf",
            "video": "https://www.climatechange.ai/papers/icml2021/12",
            "article": "https://www.cs.cmu.edu/news/2021/cmu-team-uses-machine-learning-predict-peatland-fires",
            "awards": "2nd Place, Natural Disaster Category, University of Toronto ProjectX Research Competition",
        },
    ],
    "Thesis": [
        {
            "name": "Tools to Facilitate Machine Learning Product Development in Industry",
            "venue": "MS Thesis, Carnegie Mellon University 2022",
            "org": <><strong>Shreya Bali</strong>, Advisor: Chinmay Kulkarni</>,
            "tags": {
                "Human Computer Interaction": [],
                "Applied ML": []
            },
            "year": "2021-2022",
            "thesis": "http://reports-archive.adm.cs.cmu.edu/anon/anon/home/ftp/usr/ftp/2022/CMU-CS-22-126.pdf",
        },
    ],
    "Work in Progress": [
        {
            "name": "[Anonymized Title]",
            "venue": "Under Review",
            "org": <>Jill Fain Lehman, Alexander Maytin, Brian Chen, <strong>Shreya Bali</strong>, Riku Arakawa, Emma Russell, Haarika Reddy, Annalise Vaccarello, Christina Trinh, Dustin DeMeo, Mayank Goel, Bryan T Carroll</>,
            "tags": {
                "Health": [],
                "Applied ML": [],
                "Human-AI Interaction": []
            },
            "year": "2024-2025",
        },
    ],
};

// Flat list for backward compatibility
export const research = [
    ...researchByCategory["Conference Papers"],
    ...researchByCategory["Journal Papers"],
    ...researchByCategory["Workshop Papers"],
    ...researchByCategory["Thesis"],
    ...researchByCategory["Work in Progress"],
];
export const industry = [
    {
        "name": "SmashLab, Carnegie Mellon University",
        "org": "PhD Research Assistant, Advisor: Prof. Mayank Goel",
        "position": "PhD Research Assistant",
        "tags": {
            "Human Computer Interaction": [],
            "Applied Machine Learning": []
        },
        "year": "2024 - Present",
        "desc": "Designing adaptive, mixed-initiative AI systems that keep people in control. Working on systems that balance AI initiative with human oversight across productivity, classrooms, and health teams. Focus on creating AI infrastructure that preserves value pluralism and supports coordination across stakeholders."
    },
    {
        "name": "Databricks Inc.",
        "org": "Trust, Safety and Anti-Abuse Team",
        "position": "Software Engineer",
        "tags": {
            "Systems": [],
            "Applied Machine Learning": []
        },
        "year": "2022 - 2024",
        "desc": "Built large-scale ML infrastructure for trust and safety applications. Improved stability of authentication platform and developed systems to decrease abuse on the platform. Worked on distributed systems using Apache Spark, Kubernetes, and AWS."
    },
    {
        "name": "Reliance Jio ",
        "org": "Software Engineer Intern, Cricket Sports Analysis",
        "position": "",
        "tags":
        {
            "Applied ML": []
        },
        "year": "2021",
        "desc": "During this internship, I used Computer Vision to improve the analysis of cricket matches by person & object identification, and keyframe selection. I worked on the entire pipeline: scraping youtube videos, data labeling, data processing, implementation of several baseline models & brainstorming novel algorithms, and conducting analysis on the results"
    },
    {
        "name": "Diderot",
        "tags":
        {
            "Machine Learning": ["machine learning"]
        },
        "website": "https://diderot.one/",
        "org": "Research Assistant, Implicit Concept-Link Detection",
        "year": "2019",
        "desc": "In Fall 2019, I worked as a Machine Learning Research Assistant for a CMU-based Startup: Diderot under Prof. Anil Ada and Prof. Umut Acar\n During my time here, I worked on implicit linking using NLP for an online platform that allows instructors to upload and share their course content, allowing students to refer to relevant material easily."

    },

    {
        "name": "Morgan Stanley Business intelligence",
        "tags":
        {
            "Parallel/Distributed Systems": ["big data"]
        },
        "org": "Summer Tech Analyst, Speeding-Up Data Extraction",
        "year": "2019",
        "desc": "During the Summer of 2019, I worked as a tech analyst at Morgan Stanley, New York under the Busines Intelligence Group \nDuring the internship, my main project was to convert the data extraction process from a sequential execution to a parallel execution running on a cluster using Spark with Scala, thus increasing the efficiency of the entire data processing pipeline. also undertook two flask based side projects: \n Detecting inefficiencies in category definitions: The website allows for easy additions of new category definitions, seeing the split in finances and overall automated analysis of defined category partitions\n Searching for existing reports : I created a website that allows the BI units to easily search for pre-existing reporting satisfying constraints to prevent duplication"

    },


]

// Projects organized by year (most recent first)
export const projectsByCategory = {
    "2024-2025": [
        {
            "name": "Apple Health Redesign",
            "tags": {
                "Product Design": [],
                "Health Tech": [],
                "UI/UX": []
            },
            "year": "2024-2025",
            "website": "https://apple-health-redesign.vercel.app/",
            "desc": "Led end-to-end product redesign of Apple Health interface, reimagining how millions of users interact with personal health data. Architected an intuitive information hierarchy and data visualization system that makes complex health metrics accessible and actionable. Implemented with modern React and responsive design patterns, demonstrating expertise in translating user research insights into production-ready interfaces."
        },
    ],
    "2021": [
        {
            "name": "Optimizing Graph Neural Networks for CPU Inference",
            "tags": {
                "Systems": [],
                "Performance Engineering": [],
                "Applied ML": []
            },
            "org": <>with Mayank Jain</>,
            "year": "2021",
            "report": "https://drive.google.com/file/d/15kp72M79kdsYAa8LL9pX2INKYcIWvinH/view?usp=sharing",
            "code": "https://github.com/mayankj/740_Proj",
            "desc": "Engineered novel optimization techniques to enable efficient Graph Convolutional Network (GCN) inference on CPU architectures, addressing the critical industry challenge of deploying ML models in resource-constrained environments. Achieved significant performance improvements through cache-aware algorithms and architectural optimizations, validated across speed, memory efficiency, and accuracy metrics on Wiki-CS dataset. Work bridges the gap between cutting-edge deep learning and practical deployment constraints."
        },
    ],
    "2020": [
        {
            "name": "High-Performance Image Processing Toolkit",
            "tags": {
                "Systems": [],
                "Parallel Computing": [],
                "Computer Vision": []
            },
            "org": <>with Kusha Maharshi</>,
            "year": "2020",
            "report": "https://kmeshx.github.io/pdfs/418_CP__Copy_.pdf",
            "code": "https://github.com/kmeshx/Parallel-Image-Processing-Toolkit",
            "desc": "Built production-grade parallel image processing toolkit implementing core computer vision algorithms (Otsu Binarization, Edge Detection, K-Means Clustering) with both OpenMP and CUDA backends. Systematically analyzed parallelization strategies across different hardware architectures, achieving substantial speedups over sequential implementations. Demonstrates deep understanding of performance optimization and heterogeneous computing, skills essential for building scalable ML infrastructure."
        },
        {
            "name": "Multi-Modal Learning for Audio-Visual Matching",
            "tags": {
                "Applied ML": [],
                "Deep Learning": []
            },
            "org": <>with Ria Pradeep</>,
            "year": "2020",
            "code": "https://github.com/RiaPradeep/VideoSound-Matching",
            "report": "https://drive.google.com/file/d/1RqD-OX-V67RuaCUVTr0fUFEapBoCJcCI/view?usp=sharing",
            "desc": "Designed and implemented multi-modal deep learning system for audio-visual correspondence detection, with applications in content moderation, video understanding, and media synchronization. Developed novel Multi-Similarity loss function that outperforms standard Cosine-BCE by incorporating enhanced regularization. Built complete ML pipeline from data processing through model training and evaluation using PyTorch."
        },
    ],
    "2019": [
        {
            "name": "NLP System for Patent Document Analysis",
            "tags": {
                "Applied ML": [],
                "NLP": []
            },
            "org": <><strong>Shreya Bali</strong>, Prof. Scott Fahlman, Dean Aldrucci</>,
            "year": "2019",
            "poster": "https://drive.google.com/file/d/1JxfNELMP1rygKALishSz2QgSur_tRLGt/view?usp=sharing",
            "desc": "Developed specialized NLP system for parsing and analyzing patent claim language, addressing the unique challenges of legal-technical document understanding. Built using Python and spaCy, demonstrating ability to adapt ML techniques to domain-specific problems with complex linguistic structures. Relevant to legal tech, IP management, and enterprise document processing applications."
        },
    ],
};

// Flat list for backward compatibility
export const projects = [
    ...projectsByCategory["2024-2025"],
    ...projectsByCategory["2021"],
    ...projectsByCategory["2020"],
    ...projectsByCategory["2019"],
]


export const extracurricular = [
    {
        "name": "Invited Talks",
        "tags":
        {
            "Opinionat-ing/Talks": []
        },
        "year": "",
        "desc": (
            <ul>
                <li> Youth in Technology, SFHS C.O.D.E Hack (2021)</li>
                <li> Undergraduate Research Panel, Carnegie Mellon School of Computer Science (2020)</li>
                <li> Slingshot Speaker Series(2020): <br />
                    <tab /> - CMIMC(CMU), Stuyvesant High,  HackTJ, Bronx </li>

            </ul>
        )
    },
    {
        "name": "Clean India",
        "position": "Founder",
        "org": "NGO",
        "tags":
        {
            "Socially Relevant Work": ["sanitation & environment"]
        },
        "year": "2013-now",
        "website": "https://www.facebook.com/cleanindiams/",
        "desc": "Founder of NGO to optimize and improve sanitation practices in impoverished communities"

    },


    {
        "name": "Debating",
        "tags":
        {
            "Opinionat-ing/Talks": []
        },
        "year": "2013-now",
        "desc": "I've been passionate about debating ever since high school and served as the Vice-President of CMU Debate(APDA) in 2020."
    },
]
