export const research = [
    {
        "name": "[MS Thesis'22] Tools to facilitate working on Machine Learning in the Industry  ",
        "org": "Shreya Bali, Chinmay Kulkarni",
        "tags":
        {

            "Human Computer Interaction": [],

            "Machine Learning": []
        },
        "year": "2021-2022",
        "thesis": "http://reports-archive.adm.cs.cmu.edu/anon/anon/home/ftp/usr/ftp/2022/CMU-CS-22-126.pdf",
        "desc": <>
            There is an increasing interest in using machine learning (ML) across a variety of industries like finance, education and healthcare. Working on such ML product features, however, remains a point of friction for both non-technical and technical workers who without supporting infrastructure/technical knowledge struggle to fully use their skills in the context of ML. This thesis introduces novel approaches embodied in new systems to help facilitate workers better utilize the opportunities afforded by this rapidly evolving technology. At a high level, we rephrase problems encountered while ideating for ML-related features and utilizing scientific advancements as gaps in communication between the scientific community and the industry, and develop systems to help correct for this. Specifically, in the first project IdeaLens, we explore using real-world use-cases of past ML work as boundary objects while communicating technical abilities of ML work to help non-technical designers come up with new ideas within their domain. In the second project InToResearch we describe the design of a framework to spearhead an alternate ecosystem of ML research papers catered specifically to industry audience, and explore the use of TLDRs to help them navigate and find relevant information more efficiently


        </>
    },
    {
        "name": "[CHI'23] Nooks: Social Spaces to Lower Hesitations in Interacting with New People at Work ",
        "org": "Pranav Khadpe, Chinmay Kulkarni and Geoff Kauffman",
        "tags":
        {

            "Human Computer Interaction": [],

            "Socially Relevant Work": ["diversity/inclusion"]
        },
        "year": "2021-2022",
        "paper": "https://programs.sigchi.org/chi/2023/program/content/96105",
        "article": "https://www.cs.cmu.edu/news/2023/chi2023-nooks",
        "website": "https://nooks.vercel.app/",
        "code": "https://github.com/Sbali11/Nooks",
        "desc": <>

            Initiating conversations with new people at work is often intimidating because of uncertainty about their interests. People worry others may reject their attempts to initiate conversation or that others may not enjoy the conversation. We introduce a new system, Nooks, built on Slack, that reduces fear of social evaluation by enabling individuals to initiate any conversation as a nook—a conversation room that identifies its topic, but not its creator. Automatically convening others interested in the nook, Nooks further reduces fears of social evaluation by guaranteeing individuals in advance that others they are about to interact with are interested in the conversation. In a multi-month deployment with participants in a summer research program, Nooks provided participants with non-threatening and inclusive interaction opportunities, and ambient awareness, leading to new interactions online and offline. Our results demonstrate how intentionally designed social spaces can reduce fears of social evaluation and catalyze new workplace connections.


        </>
    },
    {
        "name": "[ICML Climate Change Workshop'20] Prediction of Boreal Peatland Fires in Canada ",
        "tags":
        {
            "Machine Learning": [],

            "Socially Relevant Work": ["climate change"]
        },
        "org": "Sydney Zheng, Blair Chen, Anirudh Chowdhury, Yue Wu, Akshina Gupta, Justin Khim , Reid Simmons",
        "year": "2020",
        "awards": "Placed second in Weather & Natural Disaster Category",
        "code": "https://github.com/Sbali11/PeatlandFirePrediction",
        "poster": "https://drive.google.com/file/d/1BE8EV07vt-nwMyFeo2lV4h04sxqgZ3Ml/view?usp=sharing",
        "paper": "https://s3.us-east-1.amazonaws.com/climate-change-ai/papers/icml2021/12/paper.pdf",
        "video": "https://www.climatechange.ai/papers/icml2021/12",
        "article": "https://www.cs.cmu.edu/news/2021/cmu-team-uses-machine-learning-predict-peatland-fires",
        "desc":
            <>
                In Fall 2020, I was selected in a group of 6 undergraduates to represent Carnegie Mellon in a Machine Learning Research competition(ProjectX) hosted by the University of Toronto. During this project, we worked on improving Peatland Fire Prediction using Deep Learning and proposed and developed novel models in addition to constructing a new dataset for Peatland Fires in Canada. The work was published in the ICML'21 Climate Change Workshop
                Peat fires are the largest fires on earth in terms of fuel consumption and are responsible for a significant portion of global carbon emissions. Predicting fires in the peatlands can help decision-makers and researchers monitor and prevent peat fires. Despite this, research on predicting peatland fires remains largely understudied as compared to the prediction of other forms of fires. However, peatland fires are unique among fires and therefore require datasets and architectures attuned to their particular characteristics. In this paper, we present a new dataset, PeatSet, designed specifically for the problem of peatland fire prediction. In addition, we propose several models to tackle the problem of fire prediction for the peatlands. We develop novel neural architectures for peatland fire prediction, PeatNet, and PT-Net, with a graph-based and a transformer-based architecture, respectively. Our results indicate that these new deep-learning architectures outperform a regression baseline from existing peatland research. Among all the tested models, PT-Net achieves the highest F1 score of 0.1006 and an overall accuracy of 99.84%.


            </>
    },
    {
        "name": "Audio Source Separation",
        "tags":
        {
            "Machine Learning": [],
            "Education/mentoring": []
        },
        "org": "CMU Multimodal Lab",
        "year": "2019-2020",
        "desc": "Blind audio source separation is an active area of research. In this problem, the input to the model is a sound wave with sounds produced from multiple sources. The paper suggests a novel ontology based weighted ensemble architecture to improve the accuracy of current models. We created a sample  such architecture consisting of a Transformer to identify ontological cate- gories of sound sources followed by an ensemble of Wave-U-Net Models.  The finale result is taken after weighing the results based on the predicted categories. In addition, the paper introduces a novel dataset consisting of 53 categories. The new model is tested on the new datasets and better training and validation curves are obtained as compared to a single Wave-U-Net model. In addition, while this is not discussed in the paper, the architecture allows for training a model by intermixing different datasets: only models specialized for the respective sounds can be trained on the new datasets. Hence, even if the resulting dataset is imbalanced, this does not adversely effect the training procedure.",
        "report": "https://drive.google.com/file/d/1M5Wx_qrDCH8rlJIgISL1lSFpl2hKyS9m/view?usp=sharing"
    },

    {
        "name": "Patent Claim Analysis",
        "tags":
        {
            "Machine Learning": [],
        },
        "org": "Prof. Scott Fahlman, Dean Aldrucci",
        "year": "2019",
        "poster": "https://drive.google.com/file/d/1JxfNELMP1rygKALishSz2QgSur_tRLGt/view?usp=sharing",
        "desc": "The project uses natural language parsing to understand the specialized text that occurs in patents. The code is written in Python and uses spaCy"
    },
]
export const industry = [
    {
        "name": "Databricks",
        "org": "Auth Platform & Anti-Abuse Team",
        "position": "Software Engineer",
        "tags":
        {
        },
        "year": "2022-present",
        "desc": "Improving Stability of Authentication Platform and helping decrease abuse on the platform"
    },
    {
        "name": "Reliance Jio ",
        "org": "Software Engineer Intern, Cricket Sports Analysis",
        "position": "",
        "tags":
        {
            "Machine Learning": []
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

export const projects = [
    {
        "name": "Towards GCNs that Run on CPUs",

        "tags":
        {
            "Parallel/Distributed Systems": [],
            "Machine Learning": ["machine learning"]
        },
        "year": "2021",
        "report": "https://drive.google.com/file/d/15kp72M79kdsYAa8LL9pX2INKYcIWvinH/view?usp=sharing",
        "code": "https://github.com/mayankj/740_Proj",
        "desc": <>
            (with Mayank Jain)
            <br />
            <br />
            On one hand, Graph neural networks (GNNs), an emerging deep learning model class that can extract meaningful representations from highly expressive graph-structured data are gaining popularity for a wide ranges of applications. On the other hand, as neural net architectures get deeper and deeper, the cost running modern ML algorithms efficiently is getting higher and higher. In this work, we explore techniques to make running GNNs, specifically GCNs, on everyday CPUs more feasible. Using the Wiki-CS dataset, we both analyze past approaches to optimize this class of algorithms and also suggest novel methods to optimize on the the specific structure and purpose of GCNs. We compare these approaches on several key factors including speed, cache performance and accuracy on the results.
        </>
    },

    {
        "name": "Parallel Image Processing Toolkit",

        "tags":
        {
            "Parallel/Distributed Systems": [],
            "Machine Learning": ["machine learning"]
        },
        "year": "2020",
        "report": "https://kmeshx.github.io/pdfs/418_CP__Copy_.pdf",
        "code": "https://github.com/kmeshx/Parallel-Image-Processing-Toolkit",
        "desc":
            <>
                (with Kusha Maharshi)
                <br />
                <br />
                An image processing toolbox for several image segmentation algorithms including Otsu Binarization, Edge Detection, and K-Means. The sequential versions of the algorithms are implemented using C++, and the parallel versions are implemented in both OpenMP and CUDA. The goal of this project was to implement and analyze the scalability, scope, and benefit of performing image segmentation in parallel
            </>
    },


    {
        "name": "Video Sound Matching",
        "tags":
        {
            "Machine Learning": ["machine learning"]
        },
        "year": "2020",
        "code": "https://github.com/RiaPradeep/VideoSound-Matching",
        "report": "https://drive.google.com/file/d/1RqD-OX-V67RuaCUVTr0fUFEapBoCJcCI/view?usp=sharing",
        "desc":
            <>
                (with Ria Pradeep)
                <br />
                <br />
                The aim of the project is to see if the given audio and video sample belong to the same category. Several models for this problem were implemented each of which first creates an enCoding for the audio and video input independently, using various techniques, then maps them to the same space. We also presented a novel loss function for this problem, Multi-Similarity, which builds on Cosine-BCE with increased components in the regularized term. The code for the project was written using pytorch.
            </>
    },



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