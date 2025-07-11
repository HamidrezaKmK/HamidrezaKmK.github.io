const parents = [
    {
        id: 1,
        name: 'Projects',
        image: '/projects.png',
        children: [
            { id: 11, name: `Predicting Drug Dose <br> Responses Using GNNs <br> and Attention Mechanisms`, image: '/project1.png', content: `/content/project/project1.html` },
            { id: 12, name: `Semidefinite Programming <br> using a <br> Physarum Based Dynamic`, image: '/project2.png', content: `/content/project/project2.html` },
            { id: 13, name: `ML-Mnemonist`, image: '/project3.png', content: `/content/project/project3.html` },
            { id: 14, name: `Dental Panoramic <br> Image Reconstruction <br> and Tooth Segmentation`, image: '/project4.png', content: `/content/project/project4.html` },
            { id: 15, name: `Fine-Grained Complexity <br> of Optimizing Bias Terms <br> in Neural Networks`, image: '/project5.png', content: `/content/project/project5.html` },
            { id: 16, name: `RNA Sequence Design <br> using  <br> Graph Neural Networks`, image: '/project6.png', content: `/content/project/project6.html` },
        ]
    },
    {
        id: 2,
        name: `Resume`,
        image: 'resume.png',
        children: [
            { id: 21, name: 'Child 2-1', image: '/child3.png', content: '<p>Content for Child 1-1</p>' },
            {
                id: 22,
                name: 'Child 1-1',
                image: 'path/to/child1-1.png',
                children: [
                    { id: 221, name: 'Grandchild 1-1-1', image: 'path/to/grandchild1-1-1.png', content: '<p>Content for Grandchild 1-1-1</p>' }
                ]
            }
        ]
    },
    ,
    {
        id: 3,
        name: `About Me`,
        image: 'hamid.png',
        children: [
            { id: 61, name: `About Me`, image: '/about_me.png', content: `/content/about_me/about.html` },
            { id: 63, name: `Highlights`, image: '/highlight.png', content: `/content/about_me/highlight.html` },
        ]
    },
    // {
    //     id: 4,
    //     name: `Competitive <br> Programming`,
    //     image: '/programming.png',
    //     children: [
    //         { id: 31, name: `Competitive Programming`, image: '/info.png', content: `/content/competitive_programming/competitive.html` },
    //         { id: 32, name: `Awards`, image: '/award.png', content: `/content/competitive_programming/awards.html` },
    //         { id: 33, name: `Mentorship`, image: '/mentor.png', content: `/content/competitive_programming/mentorship.html` },
    //         { id: 34, name: `Olympiad`, image: '/olmpiyad.png', content: `/content/competitive_programming/olympiad.html` }
    //     ]
    // },
    {
        id: 5,
        name: `Industry`,
        image: '/industry.png',
        children: [
            { id: 41, name: `Industrial Research`, image: '/research.png', content: `/content/industry/research.html` },
            { id: 42, name: `Engineering`, image: '/engineering.png', content: `/content/industry/engineering.html` },
            { id: 43, name: `Technical Staff`, image: '/technical.png', content: `/content/industry/techincal_staff.html` }
        ]
    },
    {
        id: 6,
        name: `Academia`,
        image: '/acdemy.png',
        children: [
            { id: 51, name: `Education`, image: '/education.png', content: `/content/academia/education.html` },
            { id: 52, name: `Publication`, image: '/publication.png', content: `/content/academia/pubilcation.html` },
            { id: 53, name: `Paper Reviews`, image: '/paper_review.png', content: `/content/academia/paper_reviews.html` },
            { id: 54, name: `Teaching Assistance`, image: '/teaching.png', content: `/content/academia/teaching.html` }
        ]
    }
];
export default parents;

export const aboutMe = {
    id: 3,
    name: `About Me`,
    image: 'hamid.png',
    children: [
        { id: 61, name: `About Me`, image: '/about_me.png', content: `/content/about_me/about.html` },
        { id: 63, name: `Highlights`, image: '/highlight.png', content: `/content/about_me/highlight.html` },
    ]
};
