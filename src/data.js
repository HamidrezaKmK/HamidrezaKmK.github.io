const parents = [
    {
        id: 1,
        name: 'Projects',
        image: '/projects.png',
        children: [
            { id: 11, name: 'Predicting Drug Dose Responses Using GNNs and Attention Mechanisms', image: '/project1.png', content: `<div style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;'><p>Combination therapies have emerged as a powerful treatment modality to overcome drug resistance and improve treatment efficacy. However, the rapid increase of drug combinations with the number of individual drugs in consideration has led to in Silico simulations becoming widespread. While many studies are only able to find synergistic pairs of drugs, our method which is named DeepDDR obtains the full dose–response matrices of different drug tuples which enables finding the optimal dose required for many applications. Additionally, this approach offers a more in-depth view of the drugs’ complex response landscape, and allows to calculate different synergy metrics as a follow-up step.</p><br/><img src="/project1.png" alt="Predicting Drug Dose Responses Using GNNs and Attention Mechanisms"><br/><p>From a technical perspective, DeepDDR facilitates Graph Neural Networks and multi-head attention with the goal of identifying the most effective drug combinations for further pre-clinical and clinincal validation. In this work, we propose a general recipe for devising Deep Neural Network architectures that can predict dose responses for multiple drugs on a specific cell-line. In our opinion, this framework can inspire future work to create new models and further address the drug-dose response problem. Graph Neural Networks and Attention-based models have emerged as powerful machine learning tools in many applications; therefore, we incorporate popular architectures in the domain to obtain latent embeddings of drug compounds and combine cell-line features with these embeddings. That being said, while previous work on drug-dose response considers MACCS fingerprints to represent drug compounds, we follow the trend of using Graph Neural Networks on SMILES notations of compounds to produce more accurate embeddings of drugs. These embeddings can take into account the structure of the compound as a whole. Finally, our findings indicate that using DeepDDR yields state-of-the art results on the comprehensive drug-dose-response NCI-ALMANAC dataset which contains drug pair dose responses on popular human cancer cell-lines.</p><p style='color: #ff0000;'>Hamidreza Kamkari, Karim Abbasi</p></div>`
            },
            {
                id: 12, name: 'Semidefinite Programming using a Physarum Based Dynamic', image: '/project2.png', content: `<div style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;'><p>Physarum Polycephalum is a slime mold that can solve shortest path problems. A mathematical model based on Physarum's behavior, known as the Physarum Directed Dynamics, can solve positive linear programs. In this paper, we present a family of Physarum-based dynamics extending the previous work and introduce a new algorithm to solve positive Semi-Definite Programs (SDP). The Physarum dynamics are governed by orthogonal projections (w.r.t. time-dependent scalar products) on the affine subspace defined by the linear constraints. We present a natural generalization of the scalar products used in the LP case to the matrix space for SDPs, which boils down to the linear case when all matrices in the SDP are diagonal, thus, representing an LP.</p><br/><img src="/project2.png" alt="Semidefinite Programming using a Physarum Based Dynamic"><br/><p>We investigate the behavior of the induced dynamics theoretically and experimentally, highlight challenges arising from the non-commutative nature of matrix products, and prove soundness and convergence under mild conditions. Moreover, we consider a more abstract view of the dynamics that suggests a slight variation to guarantee unconditional soundness and convergence-to-optimality. By simulating these dynamics using suitable discretizations, one obtains numerical algorithms for solving positive SDPs, which have applications in discrete optimization, e.g., for computing the Goemans-Williamson approximation for MaxCut or the Lovasz theta number for determining the clique/chromatic number in perfect graphs.</p><p style='color: #ff0000;'>Yuan Gao, Hamidreza Kamkari, Andreas Karrenbauer, Kurt Mehlhorn, Mohammadamin Sharifi
            <span style='color: #000;'>(<a href="https://arxiv.org/abs/2111.02291" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'>PDF</a>)(<a href="https://github.com/HamidrezaKmK/PhysarumSDPSolver" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'>Code</a>)</span></p></div>`
            },
            { id: 13, name: 'ML-Mnemonist', image: '/project3.png', content: `<div style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;'><br/><img src="/project3.png" alt="ML-Mnemonist"><br/><p>This is an indie self-developed project to simplify the ML operations needed for developing an ML model. The framework currently only focuses on the developmental stage of ML operations and is a lightweight package to create ML experiments, store and manage experiment configurations, hyperparameter tuning. One unique aspect of this project is its caching capabilities. Caching is done at the software level and one can use this package to work with any remote server. For example, by combining ML-Mnemonist with a Google Colab environment, you do not need to worry anymore about losing your progress when the session crashes or gets disconnected for any reason.</p><p>(<a href="https://github.com/HamidrezaKmK/ML-Mnemonist" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'>GitHub</a>)(<a href="https://pypi.org/project/mlmnemonist/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'>Package</a>)</p></div>`
            },
            { id: 14, name: 'Dental Panoramic Image Reconstruction and Tooth Segmentation', image: '/project4.png', content: `<div style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;'><p>Computer-aided diagnosis has become widespread in dental applications and with the advent of data-driven approaches in dealing with radiographic images, machine learning models are being deployed in order to help dentists in the visual representation of images as well as aiding them in their diagnosis process. During my experience with Fanap, I experimented with U-Net type architectures for panoramic dental image correction and tooth segmentation based upon Mask-RCNN type architectures. Our results, demonstrate our capabilities in restoring super exposed dental images and also the ability to accurately segment teeth and dental augmentations performed on the patient.</p><br/><img src="/project4.png" alt="Dental Panoramic Image Reconstruction and Tooth Segmentation"><br/></div>`
            },
            { id: 15, name: 'Fine-Grained Complexity of Optimizing Bias Terms in Neural Networks', image: '/project5.png', content: `<div style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;'><img src="/project5.png" alt="Fine-Grained Complexity of Optimizing Bias Terms in Neural Networks"><br/><p>The study of the complexity of learning neural networks is of high importance in the infinite quest of shedding light upon some theoretical aspects of them. One particular problem of interest is the problem of fine-tuning such networks. To explore the problem, we limit ourselves to a subset of weights and try to fix the other weights while optimizing this set according to the input data. In this work, we have addressed the complexity of fine-tuning bias terms in a fine-grained fashion and proved that even for a simple one-hidden layer neural network we require a lot of processing time to optimize these weights deterministically.</p><p style='color: #ff0000;'>Andreas Karrenbauer, Hamidreza Kamkari, Karl Bringmann</p></div>`
            },
            { id: 16, name: 'RNA Sequence Design using Graph Neural Networks', image: '/project6.png', content: `<div style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;'><p>RNA is one of the major classes of information-carrying biopolymers in the cell of living organisms and recent studies revealed a key role in regulatory processes and transcription control, which have also been connected to certain diseases. Therefore, the engineering of RNA molecules is of growing importance with applications ranging from biotechnology and medicine to synthetic biology. The functional properties of RNA are derived from their secondary structure. Given a secondary structure, we aim to predict sequences that fold into a target minimum free energy secondary structure, while considering various constraints. This problem, known as <strong>RNA Inverse Folding or RNA Sequence Design</strong>, can be regarded as a combinatorial optimization problem and in our work, we aim to solve this using a data-driven approach.</p><img src="/project6.png" alt="RNA Sequence Design using Graph Neural Networks"><br/><p>Specifically, we present a Graph Neural Network (GNN) based model that learns an autoregressive decomposition of the distribution of nucleotides given a certain secondary structure. The structure is embedded using our GNN and by carefully sampling from this generative model we can obtain the correct solution to the RNA inverse folding problem. Our model, while still improving, has proven to yield good results on RNA inverse folding datasets such as <em>PseudoBase+++, Rfam-Tenda, and Eterna100</em>.</p><p style='color: #ff0000;'>Mehdi Saman Booy, Hamidreza Kamkari, Alexander Ilin, Pekka Orponen</p></div>`
            },
        ]
    },
    {
        id: 2,
        name: 'Resume',
        image: 'resume.png',
        children: [
            { id: 21, name: 'Child 2-1', image: '/child3.png',
            content: '<p>Content for Child 1-1</p>',},
            {
                id: 22,
                name: 'Child 1-1',
                image: 'path/to/child1-1.png',
                children: [
                    {
                        id: 221,
                        name: 'Grandchild 1-1-1',
                        image: 'path/to/grandchild1-1-1.png',
                        content: '<p>Content for Grandchild 1-1-1</p>'
                    }
                ]
            }
        ]
    },
    ,
    {
        id: 3,
        name: 'About Me',
        image: 'hamid.png',
        children: [
            { id: 61, name: 'About Me', image: '/about_me.png', content:`<div style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;'><p>Delving into the nexus of machine learning fundamentals, focusing on AI reliability, explainability, and their ties to statistical foundations.</p><br/><p>Currently, I am interning at <a href="https://layer6.ai/" target="_blank" style='color: #4154FF; font-weight: 900; font-family: 'Neufile Grotesk', sans-serif;'><b>Layer6 AI</b></a> as a Machine Learning Scientist, delving deep into the reliability of generative models. Specifically, I am looking at pathological behaviours that modern generative models exhibit from a <strong>Manifold Learning Theory</strong> perspective when they are employed on Out-of-Distribution data in the wild.</p><br/><p>As a competitive programmer passionate about computer science theory and practice, I prioritize integrating top engineering practices. Recognizing the dynamic nature of machine learning research, I create libraries in my free time to support researchers and work on projects aimed at bridging the gap between abstract concepts of machine learning with real-world applications in computer vision, healthcare, and computational biology.</p></div>`
            },
            { id: 63, name: 'Highlights', image: '/highlight.png', content:`<ul style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; list-style-type: disc;'>
                <li>
                    <p>
                        <strong>Explaining a Popular Paradox in Deep Generative Models</strong> 
                        <span style="float:right;">
                            <em>September 2023</em>
                        </span>
                    </p>
                    <p>
                        <a href="https://layer6.ai/"> Layer6 AI </a>
                        <a href="https://web.cs.toronto.edu/"> University of Toronto </a>
                        - Toronto, Canada
                    </p>
                    <p>
                        We examine the paradox of deep generative models assigning high likelihoods to unseen data and propose a method to improve their reliability and theoretical understanding in out-of-distribution detection.
                    </p>
                </li>
                <br/>
                <li>
                    <p>
                        <strong>Causal Discovery and Inference using Normalizing Flows</strong> 
                        <span style="float:right;">
                            <em>May 2023</em>
                        </span>
                    </p>
                    <p>
                        <a href="https://vectorinstitute.ai/">Vector Institute</a>
                        <a href="https://web.cs.toronto.edu/"> University of Toronto </a>
                        - Toronto, Canada
                    </p>
                    <p>
                        Introduced a novel neural network architecture that can learn to understand the underlying structure of the data-generating process. This   ultimately helps us produce reliable and explainable models that can account for interventional distributions unseen in the training data.
                        [<a href="https://github.com/vahidzee/ocdaf">Code</a>][<a href="https://arxiv.org/abs/2308.07480">Paper</a>]
                    </p>
                </li>
                <br/>
                <li>
                    <p>
                        <strong>Dysweep: Enhanced Sweeps for Systematic Experimentation</strong> 
                        <span style="float:right;">
                            <em>January 2023</em>
                        </span>
                    </p>
                    <p>
                        <a href="https://vectorinstitute.ai/">Vector Institute</a>
                        - Toronto, Canada
                    </p>
                    <p>
                    An integration with <a href="https://wandb.ai/">Weights &amp; Biases</a> that provides a pipeline to aid reproducibility, continuous development, and large-scale benchmarking.
                        [<a href="https://github.com/HamidrezaKmK/dysweep">Code</a>]
                    </p>
                </li>
                <br/>
                <li>
                    <p>
                        <strong>Attention-based Drug Discovery</strong> 
                        <span style="float:right;">
                            <em>June 2022</em>
                        </span>
                    </p>
                    <p>
                        <a href="https://ce.sharif.edu/">Sharif University</a>
                        - Tehran, Iran
                    </p>
                    <p>
                        Thesis leveraged attention mechanisms in deep learning to identify synergistic drug combinations for cancer research. Achieved a significant accuracy boost of 10% in dose response prediction for the NCI-ALMANAC cancer drug database.
                    </p>
                </li>
                <br/>
                <li>
                    <p>
                        <strong>RNA Sequence design using Graph Neural Networks</strong> 
                        <span style="float:right;">
                            <em>September 2021</em>
                        </span>
                    </p>
                    <p>
                        <a href="https://www.aalto.fi/en">Aalto University</a>
                        - Espoo, Finland
                    </p>
                    <p>
                        Designing beneficial RNA structures is challenging in biotechnology. We use reinforcement learning algorithms combined with graph neural networks to model and design RNA sequences, obtaining previously underexplored structures like RNA pseudo-knots.
                    </p>
                </li>
                <br/>
                <li>
                    <p>
                        <strong>Semi-definite Programming using Slime Molds</strong> 
                        <span style="float:right;">
                            <em>June 2021</em>
                        </span>
                    </p>
                    <p>
                        <a href="https://www.mpi-inf.mpg.de/home">Max-Planck for Informatics</a>
                        - Saarbrücken, Germany
                    </p>
                    <p>
                        Inspired by the optimization dynamics of slime molds in nature, developed a mathematical dynamic that provably converges to the optimal solution for semi-definite programming problems.[<a href="https://arxiv.org/abs/2111.02291">Paper</a>]
                    </p>
                </li>
            </ul>`
            },
        ]
    },
    {
        id: 4,
        name: 'Competitive Programming',
        image: '/programming.png',
        children: [
            {
                id: 31, name: 'Competitive Programming', image: '/info.png', content: `<div style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;'><p style='font-weight: 400; color: #464646; font-family: 'Neufile Grotesk', sans-serif;'>Before my deep dive into machine learning, I was a competitive programmer pursuing <span style='font-weight: 900;'>Olympiad in Informatics.</span> Although I have moved away from it, I am still fascinated with algorithm design, complexity analysis, and coding for competitive programming contests!</p><br/>
          <p>You can find me on Codeforces <a href="https://codeforces.com/profile/yourprofile1" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'  target="_blank">here</a> and <a href="https://codeforces.com/profile/yourprofile2" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'  target="_blank">here</a>! Feel free to contact me if you have any algorithmic ideas that might intersect with my current work.</p></div>`
            },
            { id: 32, name: 'Awards', image: '/award.png', content: `<ul style="list-style: decimal; padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;"><li><a href="http://icpc.sharif.edu/2018/scoreboard/" target="_blank" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'>Gold Medal at ACM-ICPC regional contests</a></li><li><a href="https://apio2018.ru/results/official-contest/" target="_blank" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'>Bronze medal at Asia-Pacific Informatics Olympiad (APIO 2019)</a>(<a href="./docs/apio-certificate.png" target="_blank" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'>certificate</a>)</li><li><a href="https://www.info1cup.com/archive/2018/International_Round_Ranking.pdf" target="_blank" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'>Gold medal at InfoCup 2019</a>(<a href="./docs/infocup-certificate.png" target="_blank" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'>certificate</a>)</li><li><p style='font-weight: 400; color: #464646; font-family: 'Neufile Grotesk', sans-serif;'>Iranian National Olympiad in Informatics Gold Medal (INOI 2018)</p></li><li><p style='font-weight: 400; color: #464646; font-family: 'Neufile Grotesk', sans-serif;'>Iranian National Olympiad in Informatics Silver Medal (INOI 2017)</p></li></ul>`
            },
            { id: 33, name: 'Mentorship', image: '/mentor.png', content: `<ul style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; list-style-type: disc;'><li><p style="text-align:left; font-weight: 400; color: #464646; font-family: 'Neufile Grotesk', sans-serif;">Teaching creative algorithm design as well as basics of data science to employees of computer science-related companies in MAPSA boot camp.</p></li><li><p style="text-align:left; font-weight: 400; color: #464646; font-family: 'Neufile Grotesk', sans-serif;">Computer Olympiad Teacher in well-known Iranian high schools as well as a mentor at IOI preparation camp for <a href="https://ioi2019.az/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;' target="_blank">International Olympiad in Informatics held in Baku, Azarbaijan</a>.<a href="./docs/simurgh-certificate.png" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;' target="_blank">(certificate)</a></p></li><li><p style="text-align:left; font-weight: 400; color: #464646; font-family: 'Neufile Grotesk', sans-serif;">Leader of Quera College content creation team in Quera IT company. My work involved creating online courses that focus on the basics of programming as well as creative algorithm design. I and my colleagues created two online courses on Basics of Programming and Advanced Design of Algorithms and Data-structures that were used nationwide with almost 4000 participants.<a href="./docs/certificate-quera.jpg" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;' target="_blank">(certificate)</a></p></li></ul>`
            },
            {
                id: 34, name: 'Olympiad', image: '/olmpiyad.png', content: `<ul style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;'><li><p style="text-align:left; font-weight: 400; color: #464646; font-family: 'Neufile Grotesk', sans-serif;">Official Member of <a href="https://ioinformatics.org/journal/v11si_2017_25_33.pdf" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> National Olympiad in Informatics Committee (INOI) </a><span style="float:right;"> 
            <em> September 2020 - Present </em>
        </span></p></li></ul>`
            }
        ]
    },
    {
        id: 5,
        name: 'Industry',
        image: '/industry.png',
        children: [
            {
                id: 41, name: 'Industrial Research', image: '/research.png', content: `<ul style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; list-style-type: disc;'>
                <li>
                    <p>Machine Learning Scientist at 
                        <a href="https://layer6.ai/" style='color: #4154FF; font-weight: 400; font-family: "Neufile Grotesk", sans-serif;'>Toronto Dominion (TD) bank</a>
                        <span style="float:right;">
                            <em>May 2023 - Ongoing</em>
                        </span>
                    </p>
                    <ul style='list-style-type: disc; padding-left: 20px;'>
                        <li>
                            <p>Research and development of machine learning methods to detect outliers in datasets for fraud detection.</p>
                        </li>
                    </ul>
                </li>
                <br/>
                <li>
                    <p>Machine Learning Research Intern at 
                        <a href="https://layer6.ai/" style='color: #4154FF; font-weight: 400; font-family: "Neufile Grotesk", sans-serif;'>Layer6 AI</a>
                        <span style="float:right;">
                            <em>May 2023 - Ongoing</em>
                        </span>
                    </p>
                    <ul style='list-style-type: disc; padding-left: 20px;'>
                        <li>
                            <p>Researched a popular paradox in outlier detection for generative models and developed an ICLR submission in little under 4 months.</p>
                        </li>
                    </ul>
                </li>
                <br/>
                <li>
                    <p>Machine Learning Scientist at 
                        <a href="https://fanap.ir/en/aboutFanap" style='color: #4154FF; font-weight: 400; font-family: "Neufile Grotesk", sans-serif;'>Fanap</a>
                        <span style="float:right;">
                            <em>January 2022 - June 2022</em>
                        </span>
                    </p>
                    <ul style='list-style-type: disc; padding-left: 20px;'>
                        <li>
                            <p>Research and development on deep learning methods to help restore poorly taken photos of dental panoramic images and prevent reshooting and additional x-ray exposure.</p>
                        </li>
                        <li>
                            <p>Implemented a novel U-Net for dynamic range unification using Pytorch that can help panoramic image restoration.</p>
                        </li>
                        <li>
                            <p>Used Detectron2 Mask-RCNN for instance segmentation of teeth and treatments to assist computer-aided disease detection.</p>
                        </li>
                        <li>
                            <p>Created a demo using Docker and FastAPI for proof of concept and sold MVP to a client with three active radiology clinics in Tehran; all in four months.</p>
                        </li>
                    </ul>
                </li>
            </ul>
            `
            },
            {
                id: 42, name: 'Engineering', image: '/engineering.png', content: `<ul style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; list-style-type: disc;'>
            <li>
                <p>Software Engineer and Course Content Creator at Quera
                    <span style="float:right;">
                        <em>September 2019 - December 2019</em>
                    </span>
                </p>
                <ul style='list-style-type: disc; padding-left: 20px;'>
                <li>
                <p>Backend developer for the Quera website using Django.</p>
                </li>
                <li>
                <p>Initiated and developed content for two programming courses on the website, leading to the establishment of a new company subbranch and <strong>doubling</strong> the revenue.</p>
                </li>
                </ul>
                </li>
        </ul>
        `
            },
            {
                id: 43, name: 'Technical Staff', image: '/technical.png', content: `<ul style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; list-style-type: disc;'><li><p>Worked as technical staff for Python client Sharif AI Challenge national contests.<span style="float:right;"> 
            <em> January 2020 </em>
        </span></p></li></ul>`
            },
        ]
    },
    {
        id: 6, name: 'Academia', image: '/acdemy.png', children: [
            {
            id: 51, name: 'Education', image: '/education.png', content: `<ul style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; list-style-type: disc;'><li><p>Master of Science in Applied Computing - <strong><a href="https://mscac.utoronto.ca/" style='color: #4154FF; font-weight: 900; font-family: 'Neufile Grotesk', sans-serif;' target='_blank'> University of Toronto </a></strong>, Canada<span style="float:right;"> 
    <em> September 2020 - Present </em>
</span></p><br/><p><strong>Courses include</strong>:(CSC2541) Topics in Machine Learning, Introduction to Causality, (CSC2240) Graphs, Matrices, and Continuous Optimization, (CSC2701) Communication for Computer Scientists, (CSC2541) Advanced Topics in ML: Causal-aware Representation Learning, (CSC2130) Empirical Research Methods in Software Engineering</p><br/></li><li><p>Bachelors in Computer Engineering -<strong><a href="https://ce.sharif.edu/" style='color: #4154FF; font-weight: 900; font-family: 'Neufile Grotesk', sans-serif;' target='_blank'> Sharif University </a></strong>, Iran<span style="float:right;"> 
<em>(Honours student) September 2018 - June 2022</em>
</span></p><br/><p><strong>Courses include</strong>:(CE695) Stochastic Processes, (CE417) Artificial Intelligence, (CE494) Introduction to Computational Biology, (CE282) Linear Algebra, (CE181) Fundamentals of Probability and Statistics, (CE354) Algorithm Design, (CE415) Theory of Formal Languages and Automata, (MAT034) Differential Equations</p></li></ul>`
            },
            {
            id: 52, name: 'Publication', image: '/publication.png', content: `<ul style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; list-style-type: disc;'><li><p>Explaining the Out-of-Distribution Detection Paradox through Likelihood Peaks<span style="float:right;"> 
<em> September 2023 </em>
</span></p><p><a href="https://layer6.ai/" > Layer6 AI </a><a href="https://vectorinstitute.ai/"> Vector Insitute </a>,<a href="https://web.cs.toronto.edu/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> University of Toronto </a><em>- Toronto, Canada - (Under Review in ICLR)</em></p><br/><p>Deep generative models often assign higher likelihoods to out-of-distribution data from simpler sources, yet never generate such OOD samples, undermining likelihood-based generative models' reliability. We find that regions with high likelihoods are not generated if they have minimal probability mass, often due to data on low-dimensional manifolds. Using local intrinsic dimension estimation, we introduce an improved out-of-distribution detection method pairing likelihoods and intrinsic dimension estimates from a pre-trained generative model, surpassing existing benchmarks.</p><br/></li><li><p>Ordered Causal Discovery with Autoregressive Flows<span style="float:right;"> 
<em> May 2023 </em>
</span></p><p><a href="https://vectorinstitute.ai/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Vector Insitute </a>,<a href="https://web.cs.toronto.edu/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> University of Toronto </a><em>- Toronto, Canada - (<a href="https://arxiv.org/abs/2308.07480" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'>Paper</a>)</em></p><br/><p>We introduce a method for determining causal graphs from observational data, leveraging the similarities between multivariate heteroscedastic noise models and affine autoregressive flows. Our approach achieves top results in predicting the true causal structure on genomics benchmarks such as Sachs and SynTReN.</p><br/></li><li><p>Thesis Project on Combination Therapy - Iran<span style="float:right;"> 
<em> Ongoing </em>
</span></p><p><a href="https://ce.sharif.edu/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Sharif University </a><em>- Tehran - Iran</em></p><br/><p>Combination therapies are essential for overcoming drug resistance, but the surge in drug combinations has made in <em>Silico </em>simulations crucial. Our method not only identifies synergistic drug pairs but also produces full dose-response matrices, enabling optimal dosage determinations and a deeper understanding of drug interactions. Using attention mechanisms, we predict drug responses on specific cell lines, with state-of-the-art results on the NCI-ALMANAC cancer dataset, outpacing traditional drug fingerprints by leveraging graph neural network embeddings.</p><br/></li><li><p>Physarum Inspired Dynamics to Solve Semi-Definite Programs<span style="float:right;"> 
<em> June 2021 </em>
</span></p><p><a href="https://www.mpi-inf.mpg.de/home" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Max Planck Institute for Informatics </a><em>- Saarbrücken - Germany -</em>(<a href="https://arxiv.org/abs/2111.02291" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'>Paper</a>)</p><br/><p>Physarum Polycephalum, a slime mold, exhibits behavior capable of solving shortest path problems, which has inspired a mathematical model for positive linear programs. This paper introduces an extended family of these dynamics and a new algorithm for positive Semi-Definite Programs (SDP), detailing their foundational principles and their application in discrete optimization, including solutions for MaxCut approximations and clique/chromatic number determinations in perfect graphs. Our studies both theoretically and experimentally highlight the challenges, ensure soundness, and confirm convergence.</p></li></ul>`
            },
            {
            id: 53, name: 'Paper Reviews', image: '/paper_review.png', content: `<ul style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; list-style-type: disc;'><li><p>Official Reviewer for <a href="https://iclr.cc/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Twelfth International Conference on Learning Representations </a><span style="float:right;"> 
<em> October 2023 </em>
</span></p></li><li><p>Official Reviewer for <a href="https://nips.cc/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Thirty-seventh Conference on Neural Information Processing Systems </a><span style="float:right;"> 
<em> August 2023 </em>
</span></p></li></ul>`
            },
            {
            id: 54, name: 'Teaching Assistance', image: '/teaching.png', content: `<ul style='padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; list-style-type: disc;'>
<li><p>(CSC384) Introduction to Artificial Intelligence<a href="https://www.cs.toronto.edu/~axgao/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Alice Gao </a><span style="float:right;"> 
<em>January 2022 - June 2022 </em>
</span></p></li>
<li><p>(CSC236) Introduction to the Theory of Computation<a href="https://www.cs.toronto.edu/~fpitt/"  style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> François Pitt </a><span style="float:right;"> 
<em> September 2022 - December 2022 </em>
</span></p></li>
<li><p>(CE40417) Artificial Intelligence course <a href="http://blogs.bu.edu/mhrohban/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Mohammad Hossein Rohban </a><span style="float:right;"> 
<em>September 2021 - January 2022 </em>
</span></p></li>
<li><p>(CE40254) Head of Data Structure and Algorithms course <a href="http://sharif.edu/~ghodsi/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Mohammad Ghodsi </a><span style="float:right;"> 
<em> January 2021 - June 2021 </em>
</span></p></li>
<li><p>(CE40417) Artificial Intelligence course<a href="http://blogs.bu.edu/mhrohban/" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Mohammad Hossein Rohban </a><span style="float:right;"> 
<em> January 2021 - June 2021 </em>
</span></p></li>
<li><p>(CE40181) Probability and Statistics course<a href="https://scholar.google.com/citations?user=GbJMZLIAAAAJ&amp;hl=en" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Ali Sharifi-Zarchi </a><span style="float:right;"> 
<em> September 2020 - January 2021 </em>
</span></p></li>
<li><p>(CE40115) Discrete Structures course<a href="https://scholar.google.com/citations?user=xuNJ-d8AAAAJ&amp;hl=en"  style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Mohammad Ali Abam </a><span style="float:right;"> 
<em> January 2020 - June 2020 </em>
</span></p></li>
<li><p>(CE40354) Advanced Algorithm design course<a href="https://scholar.google.com/citations?user=GbJMZLIAAAAJ&amp;hl=en" style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Ali Sharifi-Zarchi </a><span style="float:right;"> 
<em> January 2020 - June 2020 </em>
</span></p></li>
<li><p>(CE40254) Data structure and Algorithms course<a href="https://scholar.google.com/citations?user=TNfL9SIAAAAJ&amp;hl=en"  style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Mahdi Safarnejad-Boroujeni </a><span style="float:right;"> 
<em> January 2020 - June 2020 </em>
</span></p></li>
<li><p>(CE40254) Data structure and Algorithms course<a href="https://scholar.google.com/citations?user=TNfL9SIAAAAJ&amp;hl=en"   style='color: #4154FF; font-weight: 400; font-family: 'Neufile Grotesk', sans-serif;'> Mahdi Safarnejad-Boroujeni </a><span style="float:right;"> 
<em> September 2019 - January 2020 </em>
</span></p></li>
</ul>`
            }
        ]
    }
];
export default parents;