// ── Object template 1: a single product inside a catalogue card ──
export type CurriculumCardProduct = {
    /** Image URL. Shown as a thumbnail, and as the hero when selected. */
    src: string;
    /** Alt text for the image. Also used as the fallback name. */
    alt: string;
    /** Display name, shown in the planner rail and the hover list. */
    name?: string;
    /** Price in USD. Used for the card total, search, and sorting. */
    price?: number;
    /** Optional per-product detail. Included in search. */
    description?: string;
};


// ── Object template 2: one card in the product catalogue ──
// To add a card, copy this shape into CATALOGUE below. `price` is optional:
// omit it and the card shows the sum of its products. A new `category`
// string automatically appears in the category filter.
export type CatalogueEntry = {
    /** Unique, stable id. Used as the planner group key. */
    id: string;
    /** Category label, shown on the card and used by the category filter. */
    category: string;
    /** Card title. */
    title: string;
    /** Short description shown on the card. Included in search. */
    description: string;
    /** Hero image URL, shown until a product thumbnail is selected. */
    image: string;
    /** Alt text for the hero image. Falls back to `title`. */
    imageAlt?: string;
    /** The products inside this set. */
    products: CurriculumCardProduct[];
    /** Optional bundle/override price. Omit to use the sum of `products`. */
    price?: number;
};


export const CATALOGUE: CatalogueEntry[] = [
    
    {
        id: "lit-mythology-study",
        category: "Literature",
        title: "Mythology Study",
        description: "Explore Greek and Norse myths through stories and study tools.",
        image: "https://images.pexels.com/photos/20954437/pexels-photo-20954437/free-photo-of-marble-sculpture-of-zeus-in-the-louvre-museum.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Greek mythology anthology",
        products: [
            { src: "https://images.pexels.com/photos/20954437/pexels-photo-20954437/free-photo-of-marble-sculpture-of-zeus-in-the-louvre-museum.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Greek mythology anthology", name: "Greek Mythology Anthology", price: 16.99 },
            { src: "https://images.pexels.com/photos/7102721/pexels-photo-7102721.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Norse mythology collection", name: "Norse Mythology Collection", price: 15.99 },
            { src: "https://images.pexels.com/photos/28830006/pexels-photo-28830006/free-photo-of-ancient-greek-male-sculpture-in-dramatic-lighting.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Mythology study guide", name: "Mythology Study Guide", price: 13.99 },
            { src: "https://images.pexels.com/photos/10033394/pexels-photo-10033394.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Mythology reading journal", name: "Mythology Reading Journal", price: 9.99 }
        ],
    },
    {
        id: "elem-math-counting",
        category: "Mathematics - Elementary",
        title: "Counting & Number Sense Set",
        description: "Hands-on counting tools for building early number sense.",
        image: "https://images.pexels.com/photos/6623796/pexels-photo-6623796.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Counting bears set",
        products: [
            { src: "https://images.pexels.com/photos/6623796/pexels-photo-6623796.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Counting bears", name: "Counting Bears Set", price: 18.99 },
            { src: "https://images.pexels.com/photos/6624378/pexels-photo-6624378.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Number flash cards", name: "Number Flash Cards 0-100", price: 9.99 },
            { src: "https://images.pexels.com/photos/12585860/pexels-photo-12585860.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Ten frames set", name: "Magnetic Ten Frames Set", price: 14.99 },
            { src: "https://images.pexels.com/photos/7301353/pexels-photo-7301353.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Counting workbook", name: "Counting & Number Sense Workbook", price: 12.99 }
        ],
    },
    {
        id: "elem-math-shapes",
        category: "Mathematics - Elementary",
        title: "Shapes & Geometry Set",
        description: "Explore shapes, patterns, and early geometry through play.",
        image: "https://images.pexels.com/photos/4868565/pexels-photo-4868565.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Wooden shape sorter",
        products: [
            { src: "https://images.pexels.com/photos/4868565/pexels-photo-4868565.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Wooden shape sorter", name: "Wooden Shape Sorter", price: 19.99 },
            { src: "https://images.pexels.com/photos/11030155/pexels-photo-11030155.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Pattern blocks", name: "Pattern Blocks Set", price: 22.99 },
            { src: "https://images.pexels.com/photos/11200121/pexels-photo-11200121.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Geometry flash cards", name: "Geometry Flash Cards", price: 9.99 },
            { src: "https://images.pexels.com/photos/6692927/pexels-photo-6692927.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Shape tracing workbook", name: "Shape Tracing Workbook", price: 10.99 }
        ],
    },
    {
        id: "elem-math-telling-time",
        category: "Mathematics - Elementary",
        title: "Telling Time Set",
        description: "Learn to read clocks and understand hours and minutes.",
        image: "https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Teaching clock",
        products: [
            { src: "https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Teaching clock", name: "Teaching Clock", price: 16.99 },
            { src: "https://images.pexels.com/photos/32814222/pexels-photo-32814222/free-photo-of-blue-alarm-clock-with-flowers-close-up.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Telling time flash cards", name: "Telling Time Flash Cards", price: 8.99 },
            { src: "https://images.pexels.com/photos/8535570/pexels-photo-8535570.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Time matching game", name: "Time Matching Game", price: 13.99 },
            { src: "https://images.pexels.com/photos/683624/pexels-photo-683624.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Telling time workbook", name: "Telling Time Workbook", price: 11.99 }
        ],
    },
    {
        id: "boxing-set",
        category: "Physical Education (PE)",
        title: "Boxing Set",
        description: "The perfect training tool for your workouts.",
        image: "https://images.pexels.com/photos/4164521/pexels-photo-4164521.jpeg?cs=tinysrgb&dpr=1&w=500",
        products: [
            { src: "https://images.pexels.com/photos/4164521/pexels-photo-4164521.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Boxing bag", name: "Boxing Bag", price: 129.99 },
            { src: "https://images.pexels.com/photos/7991943/pexels-photo-7991943.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Training gloves", name: "Training Gloves", price: 39.99 },
            { src: "https://images.pexels.com/photos/8032916/pexels-photo-8032916.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Speed rope", name: "Speed Rope", price: 14.95 },
            { src: "https://images.pexels.com/photos/12250460/pexels-photo-12250460.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Treadmill", name: "Treadmill", price: 449.00 }
        ],
    },
    {
        id: "elem-math-measurement",
        category: "Mathematics - Elementary",
        title: "Measurement Set",
        description: "Measure length, weight, and capacity with real kid-sized tools.",
        image: "https://images.pexels.com/photos/5514785/pexels-photo-5514785.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Classroom balance scale",
        products: [
            { src: "https://images.pexels.com/photos/5514785/pexels-photo-5514785.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Classroom balance scale", name: "Classroom Balance Scale", price: 24.99 },
            { src: "https://images.pexels.com/photos/8478062/pexels-photo-8478062.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Kid measuring tapes", name: "Kid Measuring Tapes Set", price: 12.99 },
            { src: "https://images.pexels.com/photos/1005731/pexels-photo-1005731.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Measuring cups and spoons", name: "Measuring Cups & Spoons Set", price: 14.99 },
            { src: "https://images.pexels.com/photos/31297282/pexels-photo-31297282/free-photo-of-children-baking-workshop-in-kitchen-setting.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Measurement activity workbook", name: "Measurement Activity Workbook", price: 11.99 }
        ],
    },
    {
        id: "upper-math-multiplication",
        category: "Mathematics - Upper Elementary",
        title: "Multiplication & Division Practice Set",
        description: "Hands-on tools for building fluency with multiplication and division facts.",
        image: "https://images.pexels.com/photos/5412108/pexels-photo-5412108.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Multiplication flash cards",
        products: [
            { src: "https://images.pexels.com/photos/5412108/pexels-photo-5412108.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Multiplication flash cards", name: "Multiplication Flash Cards", price: 9.99 },
            { src: "https://images.pexels.com/photos/8250913/pexels-photo-8250913.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Division flash cards", name: "Division Flash Cards", price: 9.99 },
            { src: "https://images.pexels.com/photos/6623833/pexels-photo-6623833.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Multiplication and division workbook", name: "Multiplication & Division Workbook", price: 12.99 },
            { src: "https://images.pexels.com/photos/4172985/pexels-photo-4172985.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Multiplication dice game", name: "Multiplication Dice Game", price: 14.99 }
        ],
    },
    {
        id: "upper-math-fractions",
        category: "Mathematics - Upper Elementary",
        title: "Fractions Explorer Set",
        description: "Concrete models for comparing, adding, and understanding fractions.",
        image: "https://images.pexels.com/photos/40135596/pexels-photo-40135596/free-photo-of-four-delicious-pizza-slices-with-toppings.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Fraction circles",
        products: [
            { src: "https://images.pexels.com/photos/40135596/pexels-photo-40135596/free-photo-of-four-delicious-pizza-slices-with-toppings.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Fraction circles", name: "Fraction Circles Set", price: 16.99 },
            { src: "https://images.pexels.com/photos/31094832/pexels-photo-31094832/free-photo-of-delicious-pepperoni-and-onion-pizza-on-wooden-table.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Fraction tiles", name: "Fraction Tiles", price: 14.99 },
            { src: "https://images.pexels.com/photos/11432074/pexels-photo-11432074.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Fraction dominoes game", name: "Fraction Dominoes Game", price: 12.99 },
            { src: "https://images.pexels.com/photos/5056857/pexels-photo-5056857.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Fractions workbook", name: "Fractions Workbook", price: 11.99 }
        ],
    },
    {
        id: "upper-math-decimals-money",
        category: "Mathematics - Upper Elementary",
        title: "Decimals & Money Set",
        description: "Real-world tools for place value, decimals, and counting money.",
        image: "https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Play money coins and bills set",
        products: [
            { src: "https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Play money coins and bills set", name: "Play Money Coins and Bills Set", price: 12.99 },
            { src: "https://images.pexels.com/photos/5412100/pexels-photo-5412100.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Decimal place value blocks", name: "Decimal Place Value Blocks", price: 19.99 },
            { src: "https://images.pexels.com/photos/3943715/pexels-photo-3943715.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Money math workbook", name: "Money Math Workbook", price: 10.99 },
            { src: "https://images.pexels.com/photos/5412110/pexels-photo-5412110.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Decimal place value mat", name: "Decimal Place Value Mat", price: 8.99 }
        ],
    },
    {
        id: "upper-math-geometry",
        category: "Mathematics - Upper Elementary",
        title: "Geometry Builders Set",
        description: "Tools for exploring shapes, angles, area, and 3D figures.",
        image: "https://images.pexels.com/photos/5477782/pexels-photo-5477782.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Geometric shapes set",
        products: [
            { src: "https://images.pexels.com/photos/5477782/pexels-photo-5477782.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Geometric shapes set", name: "Geometric Shapes Set", price: 15.99 },
            { src: "https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Geoboard set", name: "Geoboard Set", price: 13.99 },
            { src: "https://images.pexels.com/photos/7111530/pexels-photo-7111530.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "3D shapes models", name: "3D Shapes Models", price: 18.99 },
            { src: "https://images.pexels.com/photos/5412431/pexels-photo-5412431.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Protractor and ruler set", name: "Protractor and Ruler Set", price: 6.99 }
        ],
    },
    {
        id: "upper-math-word-problems",
        category: "Mathematics - Upper Elementary",
        title: "Math Word Problems Set",
        description: "Practice for reading, modeling, and solving multi-step word problems.",
        image: "https://images.pexels.com/photos/5905965/pexels-photo-5905965.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Word problems workbook",
        products: [
            { src: "https://images.pexels.com/photos/5905965/pexels-photo-5905965.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Word problems workbook", name: "Word Problems Workbook Grades 3-5", price: 12.99 },
            { src: "https://images.pexels.com/photos/8087869/pexels-photo-8087869.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Math story problem cards", name: "Math Story Problem Cards", price: 9.99 },
            { src: "https://images.pexels.com/photos/8363786/pexels-photo-8363786.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Problem-solving strategy posters", name: "Problem-Solving Strategy Poster Set", price: 7.99 },
            { src: "https://images.pexels.com/photos/7296428/pexels-photo-7296428.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Word problem dice game", name: "Word Problem Dice Game", price: 11.99 }
        ],
    },
    {
        id: "middle-math-prealgebra",
        category: "Mathematics - Middle School",
        title: "Pre-Algebra Starter Set",
        description: "Hands-on tools for solving one-step equations and building algebra readiness.",
        image: "https://images.pexels.com/photos/36457238/pexels-photo-36457238/free-photo-of-notebook-and-smartphone-on-checkered-paper.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Pre-algebra workbook",
        products: [
            { src: "https://images.pexels.com/photos/36457238/pexels-photo-36457238/free-photo-of-notebook-and-smartphone-on-checkered-paper.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Pre-algebra workbook", name: "Pre-Algebra Workbook", price: 14.99 },
            { src: "https://images.pexels.com/photos/6325944/pexels-photo-6325944.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Algebra tiles set", name: "Algebra Tiles Set", price: 27.99 },
            { src: "https://images.pexels.com/photos/5776/calculator-scientific.jpg?cs=tinysrgb&dpr=1&w=500", alt: "Equation balance scale", name: "Equation Balance Scale", price: 32.95 },
            { src: "https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Solving equations card game", name: "Solving Equations Card Game", price: 11.99 }
        ],
    },
    {
        id: "middle-math-ratios-proportions",
        category: "Mathematics - Middle School",
        title: "Ratios & Proportions Set",
        description: "Visual models and measuring tools for ratios, rates, and proportional relationships.",
        image: "https://images.pexels.com/photos/4778422/pexels-photo-4778422.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Ratios and proportions workbook",
        products: [
            { src: "https://images.pexels.com/photos/4778422/pexels-photo-4778422.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Ratios and proportions workbook", name: "Ratios & Proportions Workbook", price: 12.99 },
            { src: "https://images.pexels.com/photos/4778676/pexels-photo-4778676.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Ratio linking cubes", name: "Ratio Linking Cubes", price: 19.99 },
            { src: "https://images.pexels.com/photos/35865714/pexels-photo-35865714/free-photo-of-educational-tools-for-mathematics-study.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Double number line set", name: "Double Number Line Set", price: 24.99 },
            { src: "https://images.pexels.com/photos/4778670/pexels-photo-4778670.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Measuring cups and spoons set", name: "Measuring Cups and Spoons Set", price: 16.95 }
        ],
    },
    {
        id: "middle-math-integers-expressions",
        category: "Mathematics - Middle School",
        title: "Integers & Expressions Set",
        description: "Counters, number lines, and practice for integer operations and algebraic expressions.",
        image: "https://images.pexels.com/photos/8923942/pexels-photo-8923942.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Integer number line mat",
        products: [
            { src: "https://images.pexels.com/photos/8923942/pexels-photo-8923942.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Integer number line mat", name: "Integer Number Line Mat", price: 29.99 },
            { src: "https://images.pexels.com/photos/8363148/pexels-photo-8363148.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Positive and negative integer counters", name: "Integer Counters Set", price: 9.99 },
            { src: "https://images.pexels.com/photos/5412226/pexels-photo-5412226.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Algebraic expressions card game", name: "Algebraic Expressions Card Game", price: 12.99 },
            { src: "https://images.pexels.com/photos/5412109/pexels-photo-5412109.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Integer operations workbook", name: "Integer Operations Workbook", price: 11.99 }
        ],
    },
    {
        id: "middle-math-coordinate-plane-graphing",
        category: "Mathematics - Middle School",
        title: "Coordinate Plane & Graphing Set",
        description: "Graphing boards and games for plotting points, quadrants, and linear relationships.",
        image: "https://images.pexels.com/photos/8482069/pexels-photo-8482069.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Coordinate plane dry-erase whiteboard",
        products: [
            { src: "https://images.pexels.com/photos/8482069/pexels-photo-8482069.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Coordinate plane dry-erase whiteboard", name: "Coordinate Plane Whiteboard", price: 21.99 },
            { src: "https://images.pexels.com/photos/5412197/pexels-photo-5412197.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Graphing ruler and stencil set", name: "Graphing Ruler and Stencil Set", price: 8.99 },
            { src: "https://images.pexels.com/photos/8482029/pexels-photo-8482029.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Coordinate graphing game", name: "Coordinate Graphing Game", price: 17.99 },
            { src: "https://images.pexels.com/photos/6238039/pexels-photo-6238039.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Graphing workbook", name: "Graphing Workbook", price: 12.99 }
        ],
    },
    {
        id: "middle-math-probability-data",
        category: "Mathematics - Middle School",
        title: "Probability & Data Set",
        description: "Spinners, dice, and charts for experiments, probability, and interpreting data.",
        image: "https://images.pexels.com/photos/7047512/pexels-photo-7047512.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Probability spinner set",
        products: [
            { src: "https://images.pexels.com/photos/7047512/pexels-photo-7047512.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Probability spinner set", name: "Probability Spinner Set", price: 14.99 },
            { src: "https://images.pexels.com/photos/8899971/pexels-photo-8899971.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Probability dice and coin kit", name: "Probability Dice and Coin Kit", price: 11.99 },
            { src: "https://images.pexels.com/photos/6990192/pexels-photo-6990192.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Data and graphs workbook", name: "Data and Graphs Workbook", price: 12.99 },
            { src: "https://images.pexels.com/photos/7047504/pexels-photo-7047504.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Magnetic bar graph chart", name: "Magnetic Bar Graph Chart", price: 22.99 }
        ],
    },
    {
        id: "high-math-algebra-i",
        category: "Mathematics - High School",
        title: "Algebra I Essentials Set",
        description: "Core tools for solving equations, graphing lines, and building algebra fluency.",
        image: "https://images.pexels.com/photos/12174065/pexels-photo-12174065.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Graphing calculator for Algebra I",
        products: [
            { src: "https://images.pexels.com/photos/12174065/pexels-photo-12174065.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Graphing calculator", name: "Graphing Calculator", price: 89.99 },
            { src: "https://images.pexels.com/photos/5238079/pexels-photo-5238079.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Algebra I practice workbook", name: "Algebra I Practice Workbook", price: 18.95 },
            { src: "https://images.pexels.com/photos/311268/pexels-photo-311268.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Algebra tiles manipulative kit", name: "Algebra Tiles Manipulative Kit", price: 24.99 },
            { src: "https://images.pexels.com/photos/8482035/pexels-photo-8482035.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Coordinate grid dry-erase board set", name: "Coordinate Grid Dry-Erase Board Set", price: 15.99 }
        ],
    },
    {
        id: "high-math-geometry",
        category: "Mathematics - High School",
        title: "Geometry Explorer Set",
        description: "Hands-on tools for angles, shapes, proofs, and 3D spatial reasoning.",
        image: "https://images.pexels.com/photos/5412189/pexels-photo-5412189.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Compass and protractor geometry set",
        products: [
            { src: "https://images.pexels.com/photos/5412189/pexels-photo-5412189.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Compass and protractor set", name: "Compass and Protractor Set", price: 12.99 },
            { src: "https://images.pexels.com/photos/7013913/pexels-photo-7013913.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "3D geometry solids kit", name: "3D Geometry Solids Kit", price: 28.95 },
            { src: "https://images.pexels.com/photos/7013236/pexels-photo-7013236.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Geometry practice workbook", name: "Geometry Practice Workbook", price: 18.95 },
            { src: "https://images.pexels.com/photos/5412423/pexels-photo-5412423.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Drafting triangle and ruler set", name: "Drafting Triangle and Ruler Set", price: 14.99 }
        ],
    },
    {
        id: "high-math-algebra-ii-trigonometry",
        category: "Mathematics - High School",
        title: "Algebra II & Trigonometry Set",
        description: "Tools for functions, polynomials, and trigonometric ratios and graphs.",
        image: "https://images.pexels.com/photos/6256067/pexels-photo-6256067.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Algebra II and trigonometry workbook",
        products: [
            { src: "https://images.pexels.com/photos/6256067/pexels-photo-6256067.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Algebra II practice workbook", name: "Algebra II Practice Workbook", price: 21.99 },
            { src: "https://images.pexels.com/photos/6256066/pexels-photo-6256066.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Unit circle poster set", name: "Unit Circle Poster Set", price: 9.99 },
            { src: "https://images.pexels.com/photos/4494641/pexels-photo-4494641.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Trigonometry flash cards", name: "Trigonometry Flash Cards", price: 12.95 },
            { src: "https://images.pexels.com/photos/6256237/pexels-photo-6256237.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Polynomial factoring tiles kit", name: "Polynomial Factoring Tiles Kit", price: 22.99 }
        ],
    },
    {
        id: "high-math-precalculus",
        category: "Mathematics - High School",
        title: "Pre-Calculus Prep Set",
        description: "Resources for functions, conics, sequences, and limits before calculus.",
        image: "https://images.pexels.com/photos/6256109/pexels-photo-6256109.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Pre-calculus practice workbook",
        products: [
            { src: "https://images.pexels.com/photos/6256109/pexels-photo-6256109.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Pre-calculus practice workbook", name: "Pre-Calculus Practice Workbook", price: 20.99 },
            { src: "https://images.pexels.com/photos/6256077/pexels-photo-6256077.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Conic sections model kit", name: "Conic Sections Model Kit", price: 29.95 },
            { src: "https://images.pexels.com/photos/6256102/pexels-photo-6256102.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Polar and graph paper pad", name: "Polar and Graph Paper Pad", price: 8.99 },
            { src: "https://images.pexels.com/photos/28608161/pexels-photo-28608161/free-photo-of-educator-solving-math-equations-on-whiteboard.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Functions and limits card set", name: "Functions and Limits Card Set", price: 13.99 }
        ],
    },
    {
        id: "high-math-statistics-probability",
        category: "Mathematics - High School",
        title: "Statistics & Probability Set",
        description: "Hands-on materials for data analysis, sampling, and probability experiments.",
        image: "https://images.pexels.com/photos/7947754/pexels-photo-7947754.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Dice and spinners probability kit",
        products: [
            { src: "https://images.pexels.com/photos/7947754/pexels-photo-7947754.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Probability dice and spinners kit", name: "Probability Dice and Spinners Kit", price: 15.95 },
            { src: "https://images.pexels.com/photos/7947757/pexels-photo-7947757.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Statistics practice workbook", name: "Statistics Practice Workbook", price: 19.99 },
            { src: "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Magnetic data display kit", name: "Magnetic Data Display Kit", price: 26.99 },
            { src: "https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Normal distribution poster set", name: "Normal Distribution Poster Set", price: 11.99 }
        ],
    },
    {
        id: "phonics-letter-sounds",
        category: "English Language Arts - Early Reading",
        title: "Letter Sounds & Alphabet Set",
        description: "Learn every letter and its sound through hands-on practice.",
        image: "https://images.pexels.com/photos/8828604/pexels-photo-8828604.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Alphabet sound cards",
        products: [
            { src: "https://images.pexels.com/photos/8828604/pexels-photo-8828604.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Alphabet sound cards", name: "Alphabet Sound Cards", price: 14.99 },
            { src: "https://images.pexels.com/photos/11958998/pexels-photo-11958998.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Letter tracing workbook", name: "Letter Tracing Workbook", price: 9.99 },
            { src: "https://images.pexels.com/photos/9882201/pexels-photo-9882201.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Magnetic alphabet letters", name: "Magnetic Alphabet Letters", price: 12.99 },
            { src: "https://images.pexels.com/photos/7335403/pexels-photo-7335403.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Beginning sounds matching game", name: "Beginning Sounds Matching Game", price: 16.99 }
        ],
    },
    {
        id: "phonics-blends-digraphs",
        category: "English Language Arts - Early Reading",
        title: "Blends & Digraphs Set",
        description: "Build confidence reading blends and digraphs like ch, sh, and bl.",
        image: "https://images.pexels.com/photos/7156130/pexels-photo-7156130.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Blends and digraphs flash cards",
        products: [
            { src: "https://images.pexels.com/photos/7156130/pexels-photo-7156130.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Blends and digraphs flash cards", name: "Blends & Digraphs Flash Cards", price: 11.99 },
            { src: "https://images.pexels.com/photos/9765429/pexels-photo-9765429.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Consonant blends workbook", name: "Consonant Blends Workbook", price: 10.99 },
            { src: "https://images.pexels.com/photos/8087864/pexels-photo-8087864.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Digraph sorting game", name: "Digraph Sorting Game", price: 15.99 },
            { src: "https://images.pexels.com/photos/6005118/pexels-photo-6005118.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Blends word building tiles", name: "Blends Word Building Tiles", price: 18.99 }
        ],
    },
    {
        id: "phonics-sight-words",
        category: "English Language Arts - Early Reading",
        title: "Sight Words Set",
        description: "Master high-frequency sight words for fluent early reading.",
        image: "https://images.pexels.com/photos/17925153/pexels-photo-17925153/free-photo-of-close-up-of-a-child-pointing-at-a-card-lying-on-a-table-with-toys.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Sight word flash cards",
        products: [
            { src: "https://images.pexels.com/photos/17925153/pexels-photo-17925153/free-photo-of-close-up-of-a-child-pointing-at-a-card-lying-on-a-table-with-toys.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Sight word flash cards", name: "Sight Word Flash Cards", price: 9.99 },
            { src: "https://images.pexels.com/photos/8653554/pexels-photo-8653554.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Sight word bingo game", name: "Sight Word Bingo Game", price: 14.99 },
            { src: "https://images.pexels.com/photos/11958995/pexels-photo-11958995.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Sight word practice workbook", name: "Sight Word Practice Workbook", price: 8.99 },
            { src: "https://images.pexels.com/photos/705178/words-letters-scrabble-text-705178.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Sight word sentence builders", name: "Sight Word Sentence Builders", price: 13.99 }
        ],
    },
    {
        id: "phonics-early-readers",
        category: "English Language Arts - Early Reading",
        title: "Early Readers Set",
        description: "Short, decodable stories that build reading confidence step by step.",
        image: "https://images.pexels.com/photos/8922368/pexels-photo-8922368.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Early reader book set",
        products: [
            { src: "https://images.pexels.com/photos/8922368/pexels-photo-8922368.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Early reader book set", name: "Early Reader Book Set", price: 24.99 },
            { src: "https://images.pexels.com/photos/8922399/pexels-photo-8922399.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Decodable readers collection", name: "Decodable Readers Collection", price: 29.99 },
            { src: "https://images.pexels.com/photos/35610365/pexels-photo-35610365/free-photo-of-children-reading-outdoors-in-a-garden-setting.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Phonics storybooks level 1", name: "Phonics Storybooks Level 1", price: 19.99 },
            { src: "https://images.pexels.com/photos/3784648/pexels-photo-3784648.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Reading comprehension workbook", name: "Reading Comprehension Workbook", price: 11.99 }
        ],
    },
    {
        id: "phonics-rhyming-word-families",
        category: "English Language Arts - Early Reading",
        title: "Rhyming & Word Families Set",
        description: "Explore rhymes and word families to unlock new words quickly.",
        image: "https://images.pexels.com/photos/6482245/pexels-photo-6482245.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Rhyming word family cards",
        products: [
            { src: "https://images.pexels.com/photos/6482245/pexels-photo-6482245.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Rhyming word family cards", name: "Rhyming Word Family Cards", price: 12.99 },
            { src: "https://images.pexels.com/photos/26855735/pexels-photo-26855735/free-photo-of-pupil-writing-in-notebook.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Word families workbook", name: "Word Families Workbook", price: 9.99 },
            { src: "https://images.pexels.com/photos/6849291/pexels-photo-6849291.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Rhyming pairs memory game", name: "Rhyming Pairs Memory Game", price: 13.99 },
            { src: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Word family flip book", name: "Word Family Flip Book", price: 10.99 }
        ],
    },
    {
        id: "elem-ela-vocabulary",
        category: "English Language Arts - Elementary",
        title: "Vocabulary Builders Set",
        description: "Build strong word knowledge with hands-on vocabulary practice for grades 3-5.",
        image: "https://images.pexels.com/photos/6849286/pexels-photo-6849286.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Vocabulary flash cards",
        products: [
            { src: "https://images.pexels.com/photos/6849286/pexels-photo-6849286.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Vocabulary flash cards", name: "Vocabulary Flash Cards", price: 12.99 },
            { src: "https://images.pexels.com/photos/14249905/pexels-photo-14249905.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Word building tiles", name: "Word Building Tiles", price: 18.99 },
            { src: "https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Children's dictionary", name: "Children's Dictionary", price: 16.95 },
            { src: "https://images.pexels.com/photos/226612/pexels-photo-226612.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Vocabulary workbook for grades 3-5", name: "Vocabulary Workbook Grades 3-5", price: 9.99 }
        ],
    },
    {
        id: "elem-ela-reading-comprehension",
        category: "English Language Arts - Elementary",
        title: "Reading Comprehension Kit",
        description: "Strengthen understanding with stories, questions, and discussion practice.",
        image: "https://images.pexels.com/photos/8500351/pexels-photo-8500351.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Reading comprehension workbook",
        products: [
            { src: "https://images.pexels.com/photos/8500351/pexels-photo-8500351.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Reading comprehension workbook", name: "Reading Comprehension Workbook", price: 11.99 },
            { src: "https://images.pexels.com/photos/7929352/pexels-photo-7929352.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Chapter book set for grades 3-5", name: "Chapter Book Set Grades 3-5", price: 29.99 },
            { src: "https://images.pexels.com/photos/6849283/pexels-photo-6849283.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Reading comprehension card game", name: "Reading Comprehension Card Game", price: 14.99 },
            { src: "https://images.pexels.com/photos/6482236/pexels-photo-6482236.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Story discussion prompt cards", name: "Story Discussion Prompt Cards", price: 10.99 }
        ],
    },
    {
        id: "elem-ela-spelling",
        category: "English Language Arts - Elementary",
        title: "Spelling Practice Set",
        description: "Practice spelling patterns with word sorts, tiles, and daily review.",
        image: "https://images.pexels.com/photos/4817203/pexels-photo-4817203.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Spelling workbook for grades 3-5",
        products: [
            { src: "https://images.pexels.com/photos/4817203/pexels-photo-4817203.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Spelling workbook for grades 3-5", name: "Spelling Workbook Grades 3-5", price: 8.99 },
            { src: "https://images.pexels.com/photos/1888022/pexels-photo-1888022.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Letter tiles spelling set", name: "Letter Tiles Spelling Set", price: 19.99 },
            { src: "https://images.pexels.com/photos/5356420/pexels-photo-5356420.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Spelling word sort cards", name: "Spelling Word Sort Cards", price: 13.99 },
            { src: "https://images.pexels.com/photos/17141799/pexels-photo-17141799/free-photo-of-use-your-words-text-on-dice.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Magnetic spelling board", name: "Magnetic Spelling Board", price: 15.99 }
        ],
    },
    {
        id: "elem-ela-grammar-basics",
        category: "English Language Arts - Elementary",
        title: "Grammar Basics Set",
        description: "Learn parts of speech, sentence structure, and punctuation step by step.",
        image: "https://images.pexels.com/photos/6550400/pexels-photo-6550400.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Grammar workbook for grades 3-5",
        products: [
            { src: "https://images.pexels.com/photos/6550400/pexels-photo-6550400.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Grammar workbook for grades 3-5", name: "Grammar Workbook Grades 3-5", price: 10.99 },
            { src: "https://images.pexels.com/photos/6307/desk-white-design-quote.jpg?cs=tinysrgb&dpr=1&w=500", alt: "Parts of speech poster set", name: "Parts of Speech Poster Set", price: 12.99 },
            { src: "https://images.pexels.com/photos/33876976/pexels-photo-33876976/free-photo-of-scrabble-tiles-spelling-school-on-wooden-background.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Sentence building card set", name: "Sentence Building Card Set", price: 16.99 },
            { src: "https://images.pexels.com/photos/705177/words-letters-scrabble-text-705177.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Punctuation practice game", name: "Punctuation Practice Game", price: 14.95 }
        ],
    },
    {
        id: "elem-ela-storytelling-writing",
        category: "English Language Arts - Elementary",
        title: "Storytelling & Narrative Writing Set",
        description: "Plan, draft, and tell original stories with prompts and writing tools.",
        image: "https://images.pexels.com/photos/5612810/pexels-photo-5612810.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Story starter prompt cards",
        products: [
            { src: "https://images.pexels.com/photos/5612810/pexels-photo-5612810.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Story starter prompt cards", name: "Story Starter Prompt Cards", price: 11.99 },
            { src: "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Narrative writing journal", name: "Narrative Writing Journal", price: 9.95 },
            { src: "https://images.pexels.com/photos/7296382/pexels-photo-7296382.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Story map planning pad", name: "Story Map Planning Pad", price: 8.99 },
            { src: "https://images.pexels.com/photos/8923544/pexels-photo-8923544.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Storytelling picture prompt set", name: "Storytelling Picture Prompt Set", price: 17.99 }
        ],
    },
    {
        id: "writing-essay",
        category: "English Language Arts - Writing",
        title: "Essay Writing Set",
        description: "Build strong thesis statements, outlines, and polished essays from start to finish.",
        image: "https://images.pexels.com/photos/204511/pexels-photo-204511.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Essay Writing Set",
        products: [
            { src: "https://images.pexels.com/photos/204511/pexels-photo-204511.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Essay writing workbook", name: "Essay Writing Workbook", price: 24.99 },
            { src: "https://images.pexels.com/photos/7504756/pexels-photo-7504756.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Academic writing guidebook", name: "Academic Writing Guidebook", price: 29.95 },
            { src: "https://images.pexels.com/photos/2440970/pexels-photo-2440970.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Essay outline and planner pad", name: "Essay Outline & Planner Pad", price: 16.99 },
            { src: "https://images.pexels.com/photos/4476370/pexels-photo-4476370.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "College essay examples book", name: "College Essay Examples Book", price: 19.99 }
        ],
    },
    {
        id: "writing-research-citations",
        category: "English Language Arts - Writing",
        title: "Research & Citations Set",
        description: "Learn to research sources, take notes, and cite evidence correctly and confidently.",
        image: "https://images.pexels.com/photos/8085267/pexels-photo-8085267.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Research and Citations Set",
        products: [
            { src: "https://images.pexels.com/photos/8085267/pexels-photo-8085267.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Research skills workbook", name: "Research Skills Workbook", price: 22.99 },
            { src: "https://images.pexels.com/photos/1383379/pexels-photo-1383379.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "MLA and APA citation guide", name: "MLA & APA Citation Guide", price: 18.95 },
            { src: "https://images.pexels.com/photos/6779632/pexels-photo-6779632.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Source note-taking cards", name: "Source Note-Taking Cards", price: 12.99 },
            { src: "https://images.pexels.com/photos/5009160/pexels-photo-5009160.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Paraphrasing and plagiarism handbook", name: "Paraphrasing & Plagiarism Handbook", price: 21.50 }
        ],
    },
    {
        id: "writing-grammar-punctuation",
        category: "English Language Arts - Writing",
        title: "Advanced Grammar & Punctuation Set",
        description: "Master advanced grammar, punctuation, and sentence structure for clear academic writing.",
        image: "https://images.pexels.com/photos/5409045/pexels-photo-5409045.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Advanced Grammar and Punctuation Set",
        products: [
            { src: "https://images.pexels.com/photos/5409045/pexels-photo-5409045.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Advanced grammar workbook", name: "Advanced Grammar Workbook", price: 23.99 },
            { src: "https://images.pexels.com/photos/8087863/pexels-photo-8087863.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Punctuation practice cards", name: "Punctuation Practice Cards", price: 14.95 },
            { src: "https://images.pexels.com/photos/11911071/pexels-photo-11911071.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Grammar reference poster set", name: "Grammar Reference Poster Set", price: 17.99 },
            { src: "https://images.pexels.com/photos/268351/pexels-photo-268351.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Sentence diagramming kit", name: "Sentence Diagramming Kit", price: 19.99 }
        ],
    },
    {
        id: "writing-poetry",
        category: "English Language Arts - Writing",
        title: "Poetry Set",
        description: "Read, analyze, and write poetry with tools for imagery, rhythm, and figurative language.",
        image: "https://images.pexels.com/photos/2662180/pexels-photo-2662180.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Poetry Set",
        products: [
            { src: "https://images.pexels.com/photos/2662180/pexels-photo-2662180.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Poetry anthology for teens", name: "Poetry Anthology for Teens", price: 21.99 },
            { src: "https://images.pexels.com/photos/3007370/pexels-photo-3007370.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Poetry writing journal", name: "Poetry Writing Journal", price: 16.95 },
            { src: "https://images.pexels.com/photos/9492818/pexels-photo-9492818.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Figurative language flash cards", name: "Figurative Language Flash Cards", price: 13.99 },
            { src: "https://images.pexels.com/photos/11942173/pexels-photo-11942173.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Poetry analysis workbook", name: "Poetry Analysis Workbook", price: 22.50 }
        ],
    },
    {
        id: "writing-creative",
        category: "English Language Arts - Writing",
        title: "Creative Writing Set",
        description: "Spark original stories with prompts, character tools, and dialogue-writing practice.",
        image: "https://images.pexels.com/photos/7437080/pexels-photo-7437080.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Creative Writing Set",
        products: [
            { src: "https://images.pexels.com/photos/7437080/pexels-photo-7437080.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Creative writing prompts deck", name: "Creative Writing Prompts Deck", price: 15.99 },
            { src: "https://images.pexels.com/photos/5702407/pexels-photo-5702407.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Short story writing workbook", name: "Short Story Writing Workbook", price: 23.95 },
            { src: "https://images.pexels.com/photos/261735/pexels-photo-261735.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Character development journal", name: "Character Development Journal", price: 18.99 },
            { src: "https://images.pexels.com/photos/8716210/pexels-photo-8716210.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Storytelling and dialogue guide", name: "Storytelling & Dialogue Guide", price: 20.99 }
        ],
    },
    {
        id: "lit-classic-novel-study",
        category: "Literature",
        title: "Classic Novel Study",
        description: "A complete set for reading and discussing a classic novel.",
        image: "https://images.pexels.com/photos/1204743/pexels-photo-1204743.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Pride and Prejudice novel",
        products: [
            { src: "https://images.pexels.com/photos/1204743/pexels-photo-1204743.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Pride and Prejudice novel", name: "Pride and Prejudice Novel", price: 12.99 },
            { src: "https://images.pexels.com/photos/1479120/pexels-photo-1479120.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Classic novel study guide", name: "Classic Novel Study Guide", price: 14.99 },
            { src: "https://images.pexels.com/photos/34835173/pexels-photo-34835173/free-photo-of-open-journal-with-handwritten-notes-and-bookmark.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Reading journal", name: "Reading Journal", price: 9.99 },
            { src: "https://images.pexels.com/photos/4245027/pexels-photo-4245027.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Character and theme discussion cards", name: "Character & Theme Discussion Cards", price: 11.99 }
        ],
    },
    {
        id: "lit-shakespeare-study",
        category: "Literature",
        title: "Shakespeare Study",
        description: "Everything needed to read, study, and perform Shakespeare.",
        image: "https://images.pexels.com/photos/12165875/pexels-photo-12165875.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Hamlet play",
        products: [
            { src: "https://images.pexels.com/photos/12165875/pexels-photo-12165875.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Hamlet play", name: "Hamlet Play", price: 9.99 },
            { src: "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Shakespeare complete works collection", name: "Shakespeare Complete Works", price: 24.99 },
            { src: "https://images.pexels.com/photos/5124874/pexels-photo-5124874.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Shakespeare study guide", name: "Shakespeare Study Guide", price: 16.99 },
            { src: "https://images.pexels.com/photos/34436217/pexels-photo-34436217/free-photo-of-vintage-style-journal-with-artistic-bookmark.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Shakespeare quote journal", name: "Shakespeare Quote Journal", price: 12.99 }
        ],
    },
    {
        id: "lit-poetry-anthology-study",
        category: "Literature",
        title: "Poetry Anthology Study",
        description: "Read, analyze, and write poetry with this anthology set.",
        image: "https://images.pexels.com/photos/3150550/pexels-photo-3150550.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Poetry anthology",
        products: [
            { src: "https://images.pexels.com/photos/3150550/pexels-photo-3150550.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Poetry anthology", name: "Poetry Anthology", price: 18.99 },
            { src: "https://images.pexels.com/photos/3150555/pexels-photo-3150555.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Poetry analysis workbook", name: "Poetry Analysis Workbook", price: 15.99 },
            { src: "https://images.pexels.com/photos/895465/pexels-photo-895465.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Poetry writing journal", name: "Poetry Writing Journal", price: 10.99 },
            { src: "https://images.pexels.com/photos/40320852/pexels-photo-40320852/free-photo-of-woman-reading-poetry-book-in-cozy-setting.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Poetry discussion cards", name: "Poetry Discussion Cards", price: 12.99 }
        ],
    },
    
    {
        id: "lit-dystopian-modern-literature",
        category: "Literature",
        title: "Dystopian & Modern Literature",
        description: "A set for studying dystopian and modern classic novels.",
        image: "https://images.pexels.com/photos/38173017/pexels-photo-38173017/free-photo-of-tall-stack-of-worn-books-on-dark-background.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "1984 novel",
        products: [
            { src: "https://images.pexels.com/photos/38173017/pexels-photo-38173017/free-photo-of-tall-stack-of-worn-books-on-dark-background.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "1984 novel", name: "1984 Novel", price: 11.99 },
            { src: "https://images.pexels.com/photos/185762/pexels-photo-185762.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Brave New World novel", name: "Brave New World Novel", price: 11.99 },
            { src: "https://images.pexels.com/photos/34042183/pexels-photo-34042183/free-photo-of-open-book-with-chapter-two-exposed.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Dystopian literature study guide", name: "Dystopian Literature Study Guide", price: 15.99 },
            { src: "https://images.pexels.com/photos/3847646/pexels-photo-3847646.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Modern literature discussion cards", name: "Modern Literature Discussion Cards", price: 12.99 }
        ],
    },
    {
        id: "bio-cells-microscopes",
        category: "Science - Life Science",
        title: "Cells & Microscopes Set",
        description: "Explore plant and animal cells up close with hands-on microscope tools.",
        image: "https://images.pexels.com/photos/9574397/pexels-photo-9574397.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Student compound microscope",
        products: [
            { src: "https://images.pexels.com/photos/9574397/pexels-photo-9574397.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Student compound microscope", name: "Student Compound Microscope", price: 89.99 },
            { src: "https://images.pexels.com/photos/4033307/pexels-photo-4033307.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Prepared microscope slides set", name: "Prepared Microscope Slides Set", price: 24.95 },
            { src: "https://images.pexels.com/photos/8442030/pexels-photo-8442030.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Animal and plant cell model", name: "Animal & Plant Cell Model", price: 32.99 },
            { src: "https://images.pexels.com/photos/8533045/pexels-photo-8533045.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Microscope slide making kit", name: "Microscope Slide Making Kit", price: 18.99 }
        ],
    },
    {
        id: "bio-ecosystems-food-webs",
        category: "Science - Life Science",
        title: "Ecosystems & Food Webs Set",
        description: "Build food webs and explore how living things depend on each other.",
        image: "https://images.pexels.com/photos/37272122/pexels-photo-37272122/free-photo-of-serene-green-forest-canopy-in-sunlight.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Ecosystem diorama kit",
        products: [
            { src: "https://images.pexels.com/photos/37272122/pexels-photo-37272122/free-photo-of-serene-green-forest-canopy-in-sunlight.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Ecosystem diorama kit", name: "Ecosystem Diorama Kit", price: 29.99 },
            { src: "https://images.pexels.com/photos/34251368/pexels-photo-34251368/free-photo-of-golden-orb-weaver-spider-in-lush-forest.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Food web card game", name: "Food Web Card Game", price: 16.99 },
            { src: "https://images.pexels.com/photos/20943861/pexels-photo-20943861/free-photo-of-scenic-summer-landscape.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Pond ecosystem observation kit", name: "Pond Ecosystem Observation Kit", price: 27.99 },
            { src: "https://images.pexels.com/photos/18441377/pexels-photo-18441377/free-photo-of-close-up-of-turtle-on-ground.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Ecosystems field guide book", name: "Ecosystems Field Guide Book", price: 21.99 }
        ],
    },
    {
        id: "bio-human-body-systems",
        category: "Science - Life Science",
        title: "Human Body Systems Set",
        description: "Discover how the body's major systems work together.",
        image: "https://images.pexels.com/photos/7723400/pexels-photo-7723400.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Human torso anatomy model",
        products: [
            { src: "https://images.pexels.com/photos/7723400/pexels-photo-7723400.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Human torso anatomy model", name: "Human Torso Anatomy Model", price: 59.99 },
            { src: "https://images.pexels.com/photos/8471922/pexels-photo-8471922.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Human skeleton model", name: "Human Skeleton Model", price: 39.99 },
            { src: "https://images.pexels.com/photos/18272489/pexels-photo-18272489/free-photo-of-medical-plastic-torso.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Human body systems poster set", name: "Human Body Systems Poster Set", price: 18.99 },
            { src: "https://images.pexels.com/photos/8352120/pexels-photo-8352120.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Human body systems activity book", name: "Human Body Systems Activity Book", price: 14.99 }
        ],
    },
    {
        id: "bio-plants-photosynthesis",
        category: "Science - Life Science",
        title: "Plants & Photosynthesis Set",
        description: "Grow plants and investigate photosynthesis through hands-on experiments.",
        image: "https://images.pexels.com/photos/6427/rucola-salad-plant-leaf.jpg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Plant growth experiment kit",
        products: [
            { src: "https://images.pexels.com/photos/6427/rucola-salad-plant-leaf.jpg?cs=tinysrgb&dpr=1&w=500", alt: "Plant growth experiment kit", name: "Plant Growth Experiment Kit", price: 26.99 },
            { src: "https://images.pexels.com/photos/17497507/pexels-photo-17497507/free-photo-of-a-small-plant-sprouting-from-the-soil.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Photosynthesis lab kit", name: "Photosynthesis Lab Kit", price: 22.99 },
            { src: "https://images.pexels.com/photos/22610716/pexels-photo-22610716/free-photo-of-close-up-of-green-sprouts.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Plant life cycle model set", name: "Plant Life Cycle Model Set", price: 19.99 },
            { src: "https://images.pexels.com/photos/36689259/pexels-photo-36689259/free-photo-of-young-green-seedlings-in-biodegradable-pots.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Plant identification guide book", name: "Plant Identification Guide Book", price: 17.99 }
        ],
    },
    {
        id: "bio-animals-habitats",
        category: "Science - Life Science",
        title: "Animals & Habitats Set",
        description: "Compare animal habitats, adaptations, and life cycles around the world.",
        image: "https://images.pexels.com/photos/40016974/pexels-photo-40016974/free-photo-of-waterbuck-grazing-in-cantabria-park.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Animal habitats diorama kit",
        products: [
            { src: "https://images.pexels.com/photos/40016974/pexels-photo-40016974/free-photo-of-waterbuck-grazing-in-cantabria-park.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Animal habitats diorama kit", name: "Animal Habitats Diorama Kit", price: 24.99 },
            { src: "https://images.pexels.com/photos/28573531/pexels-photo-28573531/free-photo-of-pair-of-wolves-in-natural-habitat.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Animal classification sorting set", name: "Animal Classification Sorting Set", price: 19.99 },
            { src: "https://images.pexels.com/photos/27110778/pexels-photo-27110778/free-photo-of-two-kangaroos-standing-in-the-grass-near-a-tree.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Animal life cycles poster set", name: "Animal Life Cycles Poster Set", price: 15.99 },
            { src: "https://images.pexels.com/photos/14981850/pexels-photo-14981850/free-photo-of-prairie-dog-family-on-brown-field.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Animal adaptations exploration kit", name: "Animal Adaptations Exploration Kit", price: 28.99 }
        ],
    },
    {
        id: "chem-phys-periodic-table-atoms",
        category: "Science - Physical Science",
        title: "Periodic Table & Atoms Set",
        description: "Explore elements, atomic structure, and the periodic table hands-on.",
        image: "https://images.pexels.com/photos/3735778/pexels-photo-3735778.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Periodic table wall chart",
        products: [
            { src: "https://images.pexels.com/photos/3735778/pexels-photo-3735778.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Periodic table wall chart", name: "Periodic Table Wall Chart", price: 14.99 },
            { src: "https://images.pexels.com/photos/7723368/pexels-photo-7723368.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Atom model building kit", name: "Atom Model Building Kit", price: 24.99 },
            { src: "https://images.pexels.com/photos/8533135/pexels-photo-8533135.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Element flash cards", name: "Element Flash Cards", price: 12.95 },
            { src: "https://images.pexels.com/photos/3735722/pexels-photo-3735722.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Periodic table jigsaw puzzle", name: "Periodic Table Jigsaw Puzzle", price: 18.99 }
        ],
    },
    {
        id: "chem-phys-chemical-reactions",
        category: "Science - Physical Science",
        title: "Chemical Reactions Lab Set",
        description: "Run safe, supervised experiments to observe chemical changes in action.",
        image: "https://images.pexels.com/photos/8326467/pexels-photo-8326467.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Chemistry experiment kit",
        products: [
            { src: "https://images.pexels.com/photos/8326467/pexels-photo-8326467.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Chemistry experiment kit", name: "Chemistry Experiment Kit", price: 39.99 },
            { src: "https://images.pexels.com/photos/8544936/pexels-photo-8544936.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Glass beakers set", name: "Glass Beakers Set", price: 22.99 },
            { src: "https://images.pexels.com/photos/3735773/pexels-photo-3735773.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "pH test strips", name: "pH Test Strips", price: 8.99 },
            { src: "https://images.pexels.com/photos/7683810/pexels-photo-7683810.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Chemical reactions workbook", name: "Chemical Reactions Workbook", price: 16.99 }
        ],
    },
    {
        id: "chem-phys-motion-forces",
        category: "Science - Physical Science",
        title: "Motion & Forces Physics Set",
        description: "Investigate speed, friction, gravity, and pulleys through hands-on physics.",
        image: "https://images.pexels.com/photos/4491718/pexels-photo-4491718.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Physics ramp and car kit",
        products: [
            { src: "https://images.pexels.com/photos/4491718/pexels-photo-4491718.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Physics ramp and car kit", name: "Physics Ramp and Car Kit", price: 34.99 },
            { src: "https://images.pexels.com/photos/5502652/pexels-photo-5502652.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Pulley system kit", name: "Pulley System Kit", price: 27.99 },
            { src: "https://images.pexels.com/photos/9785607/pexels-photo-9785607.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Newton's cradle", name: "Newton's Cradle", price: 19.99 },
            { src: "https://images.pexels.com/photos/6208712/pexels-photo-6208712.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Motion experiments book", name: "Motion Experiments Book", price: 14.95 }
        ],
    },
    {
        id: "chem-phys-energy-electricity",
        category: "Science - Physical Science",
        title: "Energy & Electricity Set",
        description: "Build circuits and explore solar, stored, and generated energy.",
        image: "https://images.pexels.com/photos/18372332/pexels-photo-18372332/free-photo-of-close-up-of-computer-motherboard.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Snap circuits electricity kit",
        products: [
            { src: "https://images.pexels.com/photos/18372332/pexels-photo-18372332/free-photo-of-close-up-of-computer-motherboard.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Snap circuits electricity kit", name: "Snap Circuits Electricity Kit", price: 49.99 },
            { src: "https://images.pexels.com/photos/38021376/pexels-photo-38021376/free-photo-of-solar-panels-on-tiled-roofs-in-residential-area.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Solar panel experiment kit", name: "Solar Panel Experiment Kit", price: 29.99 },
            { src: "https://images.pexels.com/photos/32713414/pexels-photo-32713414/free-photo-of-smiling-man-operating-a-portable-generator-outdoors.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Hand crank generator", name: "Hand Crank Generator", price: 24.99 },
            { src: "https://images.pexels.com/photos/3639037/pexels-photo-3639037.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Batteries and bulbs set", name: "Batteries and Bulbs Set", price: 12.99 }
        ],
    },
    {
        id: "chem-phys-matter-states",
        category: "Science - Physical Science",
        title: "Matter & States of Matter Set",
        description: "Compare solids, liquids, and gases and model how matter changes state.",
        image: "https://images.pexels.com/photos/6945074/pexels-photo-6945074.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "States of matter model kit",
        products: [
            { src: "https://images.pexels.com/photos/6945074/pexels-photo-6945074.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "States of matter model kit", name: "States of Matter Model Kit", price: 26.99 },
            { src: "https://images.pexels.com/photos/7723330/pexels-photo-7723330.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Density columns lab set", name: "Density Columns Lab Set", price: 21.99 },
            { src: "https://images.pexels.com/photos/7722849/pexels-photo-7722849.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Molecular model kit", name: "Molecular Model Kit", price: 23.99 },
            { src: "https://images.pexels.com/photos/35600382/pexels-photo-35600382/free-photo-of-colorful-library-bookshelf-with-diverse-subjects.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Matter and materials book", name: "Matter and Materials Book", price: 15.99 }
        ],
    },
    {
        id: "earth-space-solar-system",
        category: "Science - Earth and Space",
        title: "Solar System & Astronomy Set",
        description: "Explore planets, stars, and the night sky through hands-on models and observation.",
        image: "https://images.pexels.com/photos/33161088/pexels-photo-33161088/free-photo-of-solar-system-model-in-science-museum-display.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Solar system model",
        products: [
            { src: "https://images.pexels.com/photos/33161088/pexels-photo-33161088/free-photo-of-solar-system-model-in-science-museum-display.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Solar System Model", name: "Solar System Model Kit", price: 24.99 },
            { src: "https://images.pexels.com/photos/7387475/pexels-photo-7387475.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Beginner Telescope", name: "Beginner Telescope", price: 59.99 },
            { src: "https://images.pexels.com/photos/38173710/pexels-photo-38173710/free-photo-of-starry-night-sky-with-milky-way.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Star Projector", name: "Star Projector", price: 34.99 },
            { src: "https://images.pexels.com/photos/15983269/pexels-photo-15983269/free-photo-of-stars-on-night-sky.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Astronomy Guidebook", name: "Astronomy Guidebook", price: 16.99 }
        ],
    },
    {
        id: "earth-space-rocks-minerals",
        category: "Science - Earth and Space",
        title: "Rocks & Minerals Geology Set",
        description: "Identify rocks and minerals while learning how Earth's crust forms and changes.",
        image: "https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Rock collection kit",
        products: [
            { src: "https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Rock Collection Kit", name: "Rock Collection Kit", price: 29.99 },
            { src: "https://images.pexels.com/photos/6243239/pexels-photo-6243239.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Rock Tumbler", name: "Rock Tumbler", price: 49.99 },
            { src: "https://images.pexels.com/photos/29421798/pexels-photo-29421798/free-photo-of-close-up-of-weathered-rock-formation.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Geology Field Guide", name: "Geology Field Guide", price: 14.99 },
            { src: "https://images.pexels.com/photos/8471808/pexels-photo-8471808.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Magnifying Loupe", name: "Magnifying Loupe", price: 12.99 }
        ],
    },
    {
        id: "earth-space-weather-climate",
        category: "Science - Earth and Space",
        title: "Weather & Climate Set",
        description: "Measure wind, rain, and temperature while learning how weather and climate work.",
        image: "https://images.pexels.com/photos/32358153/pexels-photo-32358153/free-photo-of-modern-weather-station-against-clear-sky.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Weather station kit",
        products: [
            { src: "https://images.pexels.com/photos/32358153/pexels-photo-32358153/free-photo-of-modern-weather-station-against-clear-sky.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Weather Station Kit", name: "Weather Station Kit", price: 39.99 },
            { src: "https://images.pexels.com/photos/33730457/pexels-photo-33730457/free-photo-of-rain-gauge-in-garden-with-wildflowers.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Rain Gauge", name: "Rain Gauge", price: 12.99 },
            { src: "https://images.pexels.com/photos/15784822/pexels-photo-15784822/free-photo-of-device-measuring-wind-speed.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Anemometer", name: "Anemometer", price: 19.99 },
            { src: "https://images.pexels.com/photos/16531199/pexels-photo-16531199/free-photo-of-thermostats-hanging-on-wall.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Weather Experiment Kit", name: "Weather Experiment Kit", price: 21.99 }
        ],
    },
    {
        id: "earth-space-oceans-water-cycle",
        category: "Science - Earth and Space",
        title: "Oceans & Water Cycle Set",
        description: "Follow water from evaporation to ocean currents with models and ocean life.",
        image: "https://images.pexels.com/photos/31934676/pexels-photo-31934676/free-photo-of-vast-ocean-horizon-on-a-bright-day.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Water cycle model",
        products: [
            { src: "https://images.pexels.com/photos/31934676/pexels-photo-31934676/free-photo-of-vast-ocean-horizon-on-a-bright-day.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Water Cycle Model", name: "Water Cycle Model", price: 27.99 },
            { src: "https://images.pexels.com/photos/5277692/pexels-photo-5277692.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Ocean Animals Set", name: "Ocean Animals Figure Set", price: 18.99 },
            { src: "https://images.pexels.com/photos/18725478/pexels-photo-18725478/free-photo-of-vials-with-blue-liquid-in-a-lab.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Water Testing Kit", name: "Water Testing Kit", price: 29.99 },
            { src: "https://images.pexels.com/photos/4767913/pexels-photo-4767913.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Oceanography Guidebook", name: "Oceanography Guidebook", price: 17.99 }
        ],
    },
    {
        id: "earth-space-earth-history-fossils",
        category: "Science - Earth and Space",
        title: "Earth History & Fossils Set",
        description: "Dig into fossils and geologic time to uncover Earth's ancient past.",
        image: "https://images.pexels.com/photos/3839557/pexels-photo-3839557.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Fossil excavation kit",
        products: [
            { src: "https://images.pexels.com/photos/3839557/pexels-photo-3839557.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Fossil Excavation Kit", name: "Fossil Excavation Kit", price: 19.99 },
            { src: "https://images.pexels.com/photos/38064601/pexels-photo-38064601/free-photo-of-fossilized-dinosaur-skeleton-embedded-in-rock.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Fossil Replica Set", name: "Fossil Replica Set", price: 24.99 },
            { src: "https://images.pexels.com/photos/20292427/pexels-photo-20292427/free-photo-of-close-up-of-a-fossil.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Geologic Timeline Puzzle", name: "Geologic Timeline Puzzle", price: 16.99 },
            { src: "https://images.pexels.com/photos/17194865/pexels-photo-17194865/free-photo-of-ancient-bones-in-stone.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Fossil Identification Guide", name: "Fossil Identification Guide", price: 15.99 }
        ],
    },
    {
        id: "stem-bridge-building",
        category: "STEM - Engineering",
        title: "Bridge Building Set",
        description: "Design, build, and load-test bridges from beams, trusses, and balsa wood.",
        image: "https://images.pexels.com/photos/1694023/pexels-photo-1694023.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Balsa wood bridge building kit",
        products: [
            { src: "https://images.pexels.com/photos/1694023/pexels-photo-1694023.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Balsa wood bridge building kit", name: "Balsa Wood Bridge Building Kit", price: 24.99 },
            { src: "https://images.pexels.com/photos/30497827/pexels-photo-30497827/free-photo-of-wooden-covered-bridge-in-rural-rome-italy.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Wooden beam and truss building set", name: "Wooden Beam & Truss Building Set", price: 34.99 },
            { src: "https://images.pexels.com/photos/37736245/pexels-photo-37736245/free-photo-of-rustic-wooden-bridge-with-steel-arches.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Bridge load testing weights set", name: "Bridge Load Testing Weights Set", price: 18.95 },
            { src: "https://images.pexels.com/photos/39962886/pexels-photo-39962886/free-photo-of-elegant-wooden-bridge-with-stone-railings.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Structure design challenge cards", name: "Structure Design Challenge Cards", price: 12.99 }
        ],
    },
    {
        id: "stem-circuits-electronics",
        category: "STEM - Engineering",
        title: "Circuits & Electronics Basics Set",
        description: "Build simple circuits and explore how batteries, switches, and LEDs work.",
        image: "https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Snap circuit beginner kit",
        products: [
            { src: "https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Snap circuit beginner kit", name: "Snap Circuit Beginner Kit", price: 29.99 },
            { src: "https://images.pexels.com/photos/36169774/pexels-photo-36169774/free-photo-of-close-up-of-electronic-microchips-on-circuit-board.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Battery holder and alligator clip lead set", name: "Battery Holder & Alligator Clip Lead Set", price: 12.95 },
            { src: "https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "LED, resistor, and switch component pack", name: "LED, Resistor & Switch Component Pack", price: 14.99 },
            { src: "https://images.pexels.com/photos/159220/printed-circuit-board-print-plate-via-macro-159220.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Simple circuit experiment guidebook", name: "Simple Circuit Experiment Guidebook", price: 9.99 }
        ],
    },
    {
        id: "stem-simple-machines",
        category: "STEM - Engineering",
        title: "Simple Machines Set",
        description: "Explore levers, pulleys, gears, and ramps through hands-on models.",
        image: "https://images.pexels.com/photos/28080034/pexels-photo-28080034/free-photo-of-machine.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Pulley and lever exploration kit",
        products: [
            { src: "https://images.pexels.com/photos/28080034/pexels-photo-28080034/free-photo-of-machine.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Pulley and lever exploration kit", name: "Pulley & Lever Exploration Kit", price: 32.99 },
            { src: "https://images.pexels.com/photos/28792581/pexels-photo-28792581/free-photo-of-rusty-industrial-gears-in-dimly-lit-workshop.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Gear and inclined plane building set", name: "Gear & Inclined Plane Building Set", price: 27.99 },
            { src: "https://images.pexels.com/photos/963635/pexels-photo-963635.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Wheel, axle, and screw model set", name: "Wheel, Axle & Screw Model Set", price: 19.99 },
            { src: "https://images.pexels.com/photos/31501021/pexels-photo-31501021/free-photo-of-close-up-of-industrial-engine-components.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Simple machines activity workbook", name: "Simple Machines Activity Workbook", price: 11.95 }
        ],
    },
    {
        id: "stem-design-challenges",
        category: "STEM - Engineering",
        title: "Engineering Design Challenge Set",
        description: "Tackle open-ended building challenges with everyday construction materials.",
        image: "https://images.pexels.com/photos/7105773/pexels-photo-7105773.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Cardboard construction and connector kit",
        products: [
            { src: "https://images.pexels.com/photos/7105773/pexels-photo-7105773.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Cardboard construction and connector kit", name: "Cardboard Construction & Connector Kit", price: 22.99 },
            { src: "https://images.pexels.com/photos/7105781/pexels-photo-7105781.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Marble run design challenge set", name: "Marble Run Design Challenge Set", price: 34.95 },
            { src: "https://images.pexels.com/photos/7105780/pexels-photo-7105780.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Egg drop protection materials pack", name: "Egg Drop Protection Materials Pack", price: 16.99 },
            { src: "https://images.pexels.com/photos/7105778/pexels-photo-7105778.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Engineering design challenge cards", name: "Engineering Design Challenge Cards", price: 13.99 }
        ],
    },
    {
        id: "stem-magnets-forces-building",
        category: "STEM - Engineering",
        title: "Magnets & Forces Building Set",
        description: "Build stable structures while exploring magnetism, balance, and forces.",
        image: "https://images.pexels.com/photos/7104215/pexels-photo-7104215.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Magnetic building tiles set",
        products: [
            { src: "https://images.pexels.com/photos/7104215/pexels-photo-7104215.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Magnetic building tiles set", name: "Magnetic Building Tiles Set", price: 39.99 },
            { src: "https://images.pexels.com/photos/39585493/pexels-photo-39585493/free-photo-of-close-up-of-a-magnetic-fluid-in-a-black-container.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Bar magnet and iron filings exploration set", name: "Bar Magnet & Iron Filings Exploration Set", price: 15.99 },
            { src: "https://images.pexels.com/photos/7104222/pexels-photo-7104222.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Magnetic levitation building kit", name: "Magnetic Levitation Building Kit", price: 28.99 },
            { src: "https://images.pexels.com/photos/6208704/pexels-photo-6208704.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Forces and stability experiment cards", name: "Forces & Stability Experiment Cards", price: 10.99 }
        ],
    },
    {
        id: "coding-beginner-robotics-kit",
        category: "Computer Science - Coding and Robotics",
        title: "Beginner Robotics Kit",
        description: "Build and program a friendly robot that moves, senses, and follows commands.",
        image: "https://images.pexels.com/photos/8294688/pexels-photo-8294688.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Programmable robot kit",
        products: [
            { src: "https://images.pexels.com/photos/8294688/pexels-photo-8294688.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Programmable robot kit", name: "Programmable Robot Kit", price: 59.99 },
            { src: "https://images.pexels.com/photos/8294795/pexels-photo-8294795.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Robot sensor pack", name: "Robot Sensor Pack", price: 24.99 },
            { src: "https://images.pexels.com/photos/10482131/pexels-photo-10482131.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Robot motor and wheel set", name: "Robot Motor and Wheel Set", price: 19.99 },
            { src: "https://images.pexels.com/photos/8294685/pexels-photo-8294685.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Robotics project guide", name: "Robotics Project Guide", price: 16.99 }
        ],
    },
    {
        id: "coding-block-coding-starter-set",
        category: "Computer Science - Coding and Robotics",
        title: "Block Coding Starter Set",
        description: "Learn coding logic with drag-and-drop blocks, puzzles, and playful projects.",
        image: "https://images.pexels.com/photos/4709290/pexels-photo-4709290.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Block coding puzzle set",
        products: [
            { src: "https://images.pexels.com/photos/4709290/pexels-photo-4709290.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Block coding puzzle set", name: "Block Coding Puzzle Set", price: 29.99 },
            { src: "https://images.pexels.com/photos/4709293/pexels-photo-4709293.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Screen-free coding cards", name: "Screen-Free Coding Cards", price: 14.99 },
            { src: "https://images.pexels.com/photos/10638070/pexels-photo-10638070.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Block coding activity book", name: "Block Coding Activity Book", price: 12.99 },
            { src: "https://images.pexels.com/photos/12899157/pexels-photo-12899157.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Coding board game", name: "Coding Board Game", price: 24.99 }
        ],
    },
    {
        id: "coding-python-for-teens-set",
        category: "Computer Science - Coding and Robotics",
        title: "Python for Kids and Teens Set",
        description: "Start text-based coding with Python through games, challenges, and real projects.",
        image: "https://images.pexels.com/photos/4709288/pexels-photo-4709288.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Python for kids book",
        products: [
            { src: "https://images.pexels.com/photos/4709288/pexels-photo-4709288.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Python for kids book", name: "Python for Kids Book", price: 22.99 },
            { src: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Python coding workbook", name: "Python Coding Workbook", price: 15.99 },
            { src: "https://images.pexels.com/photos/4709292/pexels-photo-4709292.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Python game design guide", name: "Python Game Design Guide", price: 18.99 },
            { src: "https://images.pexels.com/photos/4709287/pexels-photo-4709287.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Python challenge cards", name: "Python Challenge Cards", price: 13.99 }
        ],
    },
    {
        id: "coding-game-design-set",
        category: "Computer Science - Coding and Robotics",
        title: "Game Design Set",
        description: "Design, build, and play original video games from concept to finished levels.",
        image: "https://images.pexels.com/photos/37694203/pexels-photo-37694203/free-photo-of-retro-arcade-space-shooter-on-laptop-screen.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Game design starter book",
        products: [
            { src: "https://images.pexels.com/photos/37694203/pexels-photo-37694203/free-photo-of-retro-arcade-space-shooter-on-laptop-screen.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Game design starter book", name: "Game Design Starter Book", price: 19.99 },
            { src: "https://images.pexels.com/photos/29096083/pexels-photo-29096083/free-photo-of-pixel-art-game-over-neon-sign-in-darkness.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Game design workbook", name: "Game Design Workbook", price: 16.99 },
            { src: "https://images.pexels.com/photos/33827091/pexels-photo-33827091/free-photo-of-isometric-pixel-art-robot-on-green-background.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Pixel art kit", name: "Pixel Art Kit", price: 21.99 },
            { src: "https://images.pexels.com/photos/22845394/pexels-photo-22845394/free-photo-of-toys-blocks-with-hearts-and-animals.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Game story design cards", name: "Game Story Design Cards", price: 12.99 }
        ],
    },
    {
        id: "coding-arduino-projects-set",
        category: "Computer Science - Coding and Robotics",
        title: "Arduino Microcontroller Projects Set",
        description: "Build circuits and code interactive Arduino projects with lights, sensors, and motors.",
        image: "https://images.pexels.com/photos/15470542/pexels-photo-15470542/free-photo-of-close-up-of-semiconnectors.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Arduino starter kit",
        products: [
            { src: "https://images.pexels.com/photos/15470542/pexels-photo-15470542/free-photo-of-close-up-of-semiconnectors.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Arduino starter kit", name: "Arduino Starter Kit", price: 49.99 },
            { src: "https://images.pexels.com/photos/35673128/pexels-photo-35673128/free-photo-of-arduino-circuit-board-and-sensor-module-on-yellow.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Arduino sensor module pack", name: "Arduino Sensor Module Pack", price: 27.99 },
            { src: "https://images.pexels.com/photos/9726074/pexels-photo-9726074.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Breadboard and jumper wire kit", name: "Breadboard and Jumper Wire Kit", price: 12.99 },
            { src: "https://images.pexels.com/photos/35673120/pexels-photo-35673120/free-photo-of-arduino-microcontroller-on-yellow-background.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Arduino projects guidebook", name: "Arduino Projects Guidebook", price: 19.99 }
        ],
    },
    {
        id: "ushistory-founding",
        category: "History - United States",
        title: "Founding & Revolution Set",
        description: "Primary sources and maps for exploring America's founding and the Revolutionary War.",
        image: "https://images.pexels.com/photos/12258147/pexels-photo-12258147.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Declaration of Independence facsimile",
        products: [
            { src: "https://images.pexels.com/photos/12258147/pexels-photo-12258147.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Declaration of Independence facsimile", name: "Declaration of Independence Facsimile Set", price: 12.99 },
            { src: "https://images.pexels.com/photos/40458787/pexels-photo-40458787/free-photo-of-historic-reenactment-of-revolutionary-war-soldiers.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Revolutionary War battle map", name: "Revolutionary War Battles Map", price: 16.95 },
            { src: "https://images.pexels.com/photos/17292571/pexels-photo-17292571/free-photo-of-statue-of-george-washington-in-front-of-indiana-statehouse.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Founding Fathers biographies book", name: "Founding Fathers Biographies Book", price: 24.99 },
            { src: "https://images.pexels.com/photos/19365697/pexels-photo-19365697/free-photo-of-houses-in-a-town.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Colonial life timeline", name: "Colonial Life Timeline Poster", price: 14.95 }
        ],
    },
    {
        id: "ushistory-civil-war",
        category: "History - United States",
        title: "Civil War Set",
        description: "Maps, documents, and stories tracing the causes, battles, and aftermath of the Civil War.",
        image: "https://images.pexels.com/photos/33281125/pexels-photo-33281125/free-photo-of-scenic-view-of-gettysburg-national-battlefield.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Civil War battle map",
        products: [
            { src: "https://images.pexels.com/photos/33281125/pexels-photo-33281125/free-photo-of-scenic-view-of-gettysburg-national-battlefield.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Civil War battle map", name: "Civil War Battle Map", price: 18.99 },
            { src: "https://images.pexels.com/photos/33281129/pexels-photo-33281129/free-photo-of-lincoln-bust-at-gettysburg-soldiers-national-monument.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Gettysburg Address primary source set", name: "Gettysburg Address Primary Source Set", price: 11.99 },
            { src: "https://images.pexels.com/photos/33436818/pexels-photo-33436818/free-photo-of-historical-reenactment-with-cannon-firing.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Civil War history book for students", name: "Civil War History Book for Students", price: 22.95 },
            { src: "https://images.pexels.com/photos/32654520/pexels-photo-32654520/free-photo-of-abandoned-railroad-track-in-lush-forest.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Underground Railroad and emancipation timeline", name: "Underground Railroad & Emancipation Timeline", price: 15.99 }
        ],
    },
    {
        id: "ushistory-civil-rights",
        category: "History - United States",
        title: "Civil Rights Movement Set",
        description: "Speeches, timelines, and biographies from the fight for civil rights in America.",
        image: "https://images.pexels.com/photos/37470850/pexels-photo-37470850/free-photo-of-martin-luther-king-jr-memorial-statue-in-washington-dc.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Civil rights movement timeline poster",
        products: [
            { src: "https://images.pexels.com/photos/37470850/pexels-photo-37470850/free-photo-of-martin-luther-king-jr-memorial-statue-in-washington-dc.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Civil rights movement timeline poster", name: "Civil Rights Movement Timeline Poster", price: 14.99 },
            { src: "https://images.pexels.com/photos/32539238/pexels-photo-32539238/free-photo-of-martin-luther-king-jr-memorial-with-washington-monument.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "I Have a Dream speech primary source set", name: "\"I Have a Dream\" Speech Primary Source Set", price: 10.99 },
            { src: "https://images.pexels.com/photos/37594921/pexels-photo-37594921/free-photo-of-martin-luther-king-jr-memorial-with-cherry-blossoms.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Civil rights leaders biography collection", name: "Civil Rights Leaders Biography Collection", price: 26.99 },
            { src: "https://images.pexels.com/photos/36900242/pexels-photo-36900242/free-photo-of-martin-luther-king-jr-historical-park-statue.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "March on Washington photo book", name: "March on Washington Photo Book", price: 19.95 }
        ],
    },
    {
        id: "ushistory-presidents",
        category: "History - United States",
        title: "U.S. Presidents Set",
        description: "Portraits, facts, and timelines covering every president from Washington to today.",
        image: "https://images.pexels.com/photos/36033638/pexels-photo-36033638/free-photo-of-iconic-mount-rushmore-national-memorial-in-south-dakota.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "U.S. Presidents flash cards",
        products: [
            { src: "https://images.pexels.com/photos/36033638/pexels-photo-36033638/free-photo-of-iconic-mount-rushmore-national-memorial-in-south-dakota.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "U.S. Presidents flash cards", name: "U.S. Presidents Flash Cards", price: 13.99 },
            { src: "https://images.pexels.com/photos/136154/pexels-photo-136154.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Presidents timeline wall chart", name: "Presidents Timeline Wall Chart", price: 17.95 },
            { src: "https://images.pexels.com/photos/7252350/pexels-photo-7252350.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Presidential biographies book", name: "Presidential Biographies Book", price: 27.99 },
            { src: "https://images.pexels.com/photos/6477549/pexels-photo-6477549.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "White House and presidency activity book", name: "White House & Presidency Activity Book", price: 12.95 }
        ],
    },
    {
        id: "ushistory-westward-expansion",
        category: "History - United States",
        title: "Westward Expansion Set",
        description: "Maps and stories of trails, pioneers, and the growth of the United States westward.",
        image: "https://images.pexels.com/photos/4981820/pexels-photo-4981820.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Oregon Trail map poster",
        products: [
            { src: "https://images.pexels.com/photos/4981820/pexels-photo-4981820.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Oregon Trail map poster", name: "Oregon Trail Map Poster", price: 15.99 },
            { src: "https://images.pexels.com/photos/37736257/pexels-photo-37736257/free-photo-of-historic-covered-wagon-in-medora-north-dakota.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Lewis and Clark expedition book", name: "Lewis and Clark Expedition Book", price: 21.99 },
            { src: "https://images.pexels.com/photos/30553967/pexels-photo-30553967/free-photo-of-rustic-red-barn-with-vintage-wagon-in-autumn.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Pioneer life primary source set", name: "Pioneer Life Primary Source Set", price: 13.95 },
            { src: "https://images.pexels.com/photos/253625/pexels-photo-253625.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Westward expansion timeline cards", name: "Westward Expansion Timeline Cards", price: 16.99 }
        ],
    },
    {
        id: "world-ancient-civilizations",
        category: "History - World and Geography",
        title: "Ancient Civilizations Explorer Set",
        description: "Explore Egypt, Mesopotamia, Greece, and Rome through hands-on models and maps.",
        image: "https://images.pexels.com/photos/18291196/pexels-photo-18291196/free-photo-of-dramatic-panorama-of-egyptian-pyramids-at-dawn.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Ancient Egypt pyramid model",
        products: [
            { src: "https://images.pexels.com/photos/18291196/pexels-photo-18291196/free-photo-of-dramatic-panorama-of-egyptian-pyramids-at-dawn.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Ancient Egypt pyramid model", name: "Ancient Egypt Pyramid Model", price: 24.99 },
            { src: "https://images.pexels.com/photos/37187864/pexels-photo-37187864/free-photo-of-stacked-clay-tablets-with-ancient-designs.png?auto=compress&w=1260&h=750&dpr=1", alt: "Cuneiform clay tablet kit", name: "Cuneiform Clay Tablet Kit", price: 19.99 },
            { src: "https://images.pexels.com/photos/14532809/pexels-photo-14532809.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Greek and Roman architecture model kit", name: "Greek and Roman Architecture Model Kit", price: 29.99 },
            { src: "https://images.pexels.com/photos/4448564/pexels-photo-4448564.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Ancient civilizations timeline poster", name: "Ancient Civilizations Timeline Poster", price: 12.99 },
        ],
    },
    {
        id: "world-medieval-world",
        category: "History - World and Geography",
        title: "Medieval World Discovery Set",
        description: "Discover castles, knights, manuscripts, and trade routes of the medieval world.",
        image: "https://images.pexels.com/photos/20407157/pexels-photo-20407157/free-photo-of-castle-by-the-shore-in-passau.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Medieval castle building set",
        products: [
            { src: "https://images.pexels.com/photos/20407157/pexels-photo-20407157/free-photo-of-castle-by-the-shore-in-passau.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Medieval castle building set", name: "Medieval Castle Building Set", price: 34.99 },
            { src: "https://images.pexels.com/photos/35269751/pexels-photo-35269751/free-photo-of-medieval-knight-statue-against-brick-wall-outdoors.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Knight armor and heraldry poster", name: "Knight Armor and Heraldry Poster", price: 11.99 },
            { src: "https://images.pexels.com/photos/15078808/pexels-photo-15078808/free-photo-of-medieval-carcassonne-castle.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Medieval manuscript illumination kit", name: "Medieval Manuscript Illumination Kit", price: 18.99 },
            { src: "https://images.pexels.com/photos/26241927/pexels-photo-26241927/free-photo-of-courtyard-of-the-palace-of-the-grand-master-of-the-knights-of-rhodes.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Silk Road trade route map", name: "Silk Road Trade Route Map", price: 15.99 },
        ],
    },
    {
        id: "world-world-wars",
        category: "History - World and Geography",
        title: "World Wars History Set",
        description: "Trace both world wars through maps, timelines, and primary-source documents.",
        image: "https://images.pexels.com/photos/8607519/pexels-photo-8607519.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "World War I trench map",
        products: [
            { src: "https://images.pexels.com/photos/8607519/pexels-photo-8607519.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "World War I trench map", name: "World War I Trench Map", price: 13.99 },
            { src: "https://images.pexels.com/photos/35156484/pexels-photo-35156484/free-photo-of-architectural-detail-of-pacific-arch-at-national-memorial.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "World War II timeline chart", name: "World War II Timeline Chart", price: 16.99 },
            { src: "https://images.pexels.com/photos/35199852/pexels-photo-35199852/free-photo-of-world-war-i-soldier-s-grave-marker-in-cemetery.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "World wars primary source document kit", name: "World Wars Primary Source Document Kit", price: 24.99 },
            { src: "https://images.pexels.com/photos/2233388/pexels-photo-2233388.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Home front poster replica set", name: "Home Front Poster Replica Set", price: 19.99 },
        ],
    },
    {
        id: "world-maps-and-map-skills",
        category: "History - World and Geography",
        title: "Maps and Map Skills Kit",
        description: "Build map-reading skills with globes, compasses, and hands-on map activities.",
        image: "https://images.pexels.com/photos/8231152/pexels-photo-8231152.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "World political wall map",
        products: [
            { src: "https://images.pexels.com/photos/8231152/pexels-photo-8231152.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "World political wall map", name: "World Political Wall Map", price: 29.99 },
            { src: "https://images.pexels.com/photos/17184744/pexels-photo-17184744/free-photo-of-compass-on-the-background-of-the-map-travel-concept-route-planning-find-your-direction-in-life.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Compass and map skills kit", name: "Compass and Map Skills Kit", price: 17.99 },
            { src: "https://images.pexels.com/photos/8828450/pexels-photo-8828450.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Latitude and longitude globe", name: "Latitude and Longitude Globe", price: 39.99 },
            { src: "https://images.pexels.com/photos/21771959/pexels-photo-21771959/free-photo-of-ruler-pen-and-compass-on-map.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Map symbols flash card set", name: "Map Symbols Flash Card Set", price: 9.99 },
        ],
    },
    {
        id: "world-world-cultures",
        category: "History - World and Geography",
        title: "World Cultures Celebration Set",
        description: "Celebrate festivals, homes, music, and clothing from cultures around the world.",
        image: "https://images.pexels.com/photos/31115801/pexels-photo-31115801/free-photo-of-vibrant-drum-festival-in-cairo-streets.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "World festivals poster set",
        products: [
            { src: "https://images.pexels.com/photos/31115801/pexels-photo-31115801/free-photo-of-vibrant-drum-festival-in-cairo-streets.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "World festivals poster set", name: "World Festivals Poster Set", price: 14.99 },
            { src: "https://images.pexels.com/photos/38722944/pexels-photo-38722944/free-photo-of-traditional-japanese-street-festival-parade.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Traditional homes around the world model kit", name: "Traditional Homes Around the World Model Kit", price: 27.99 },
            { src: "https://images.pexels.com/photos/38815783/pexels-photo-38815783/free-photo-of-traditional-african-drum-performance-close-up.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "World music instruments set", name: "World Music Instruments Set", price: 32.99 },
            { src: "https://images.pexels.com/photos/28993949/pexels-photo-28993949/free-photo-of-traditional-dance-performance-in-imphal-manipur.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Cultural clothing paper doll set", name: "Cultural Clothing Paper Doll Set", price: 12.99 },
        ],
    },
    {
        id: "civics-constitution-bill-of-rights",
        category: "Social Studies - Civics and Economics",
        title: "Constitution & Bill of Rights Set",
        description: "Explore the founding documents that shape American government and rights.",
        image: "https://images.pexels.com/photos/8850753/pexels-photo-8850753.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Constitution and Bill of Rights poster set",
        products: [
            { src: "https://images.pexels.com/photos/8850753/pexels-photo-8850753.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Constitution poster", name: "U.S. Constitution Poster", price: 14.99 },
            { src: "https://images.pexels.com/photos/8035297/pexels-photo-8035297.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Bill of Rights flashcards", name: "Bill of Rights Flashcards", price: 12.95 },
            { src: "https://images.pexels.com/photos/8618028/pexels-photo-8618028.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Constitution workbook", name: "Constitution Study Workbook", price: 18.99 },
            { src: "https://images.pexels.com/photos/9227500/pexels-photo-9227500.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Founding documents puzzle", name: "Founding Documents Puzzle", price: 16.99 }
        ],
    },
    {
        id: "civics-branches-of-government",
        category: "Social Studies - Civics and Economics",
        title: "Branches of Government Set",
        description: "Learn how the executive, legislative, and judicial branches work together.",
        image: "https://images.pexels.com/photos/6610689/pexels-photo-6610689.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Branches of government chart",
        products: [
            { src: "https://images.pexels.com/photos/6610689/pexels-photo-6610689.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Branches of government chart", name: "Branches of Government Chart", price: 13.99 },
            { src: "https://images.pexels.com/photos/31736147/pexels-photo-31736147.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Government roles figure set", name: "Government Roles Figure Set", price: 24.99 },
            { src: "https://images.pexels.com/photos/8205372/pexels-photo-8205372.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "How a bill becomes a law game", name: "How a Bill Becomes a Law Game", price: 21.99 },
            { src: "https://images.pexels.com/photos/8423119/pexels-photo-8423119.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Branches of government workbook", name: "Branches of Government Workbook", price: 15.99 }
        ],
    },
    {
        id: "civics-money-banking-basics",
        category: "Social Studies - Civics and Economics",
        title: "Money & Banking Basics Set",
        description: "Understand money, banks, checks, and how everyday banking works.",
        image: "https://images.pexels.com/photos/5466806/pexels-photo-5466806.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Money and banking basics workbook",
        products: [
            { src: "https://images.pexels.com/photos/5466806/pexels-photo-5466806.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Money and banking workbook", name: "Money & Banking Workbook", price: 16.99 },
            { src: "https://images.pexels.com/photos/32553500/pexels-photo-32553500/free-photo-of-close-up-of-stacked-us-dollar-banknotes.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Play money set", name: "Play Money and Coins Set", price: 11.99 },
            { src: "https://images.pexels.com/photos/11340874/pexels-photo-11340874.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Bank account practice kit", name: "Bank Account Practice Kit", price: 19.99 },
            { src: "https://images.pexels.com/photos/10536934/pexels-photo-10536934.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Savings bank", name: "Clear Savings Bank", price: 14.95 }
        ],
    },
    {
        id: "civics-entrepreneurship-teens",
        category: "Social Studies - Civics and Economics",
        title: "Entrepreneurship for Teens Set",
        description: "Turn ideas into a business with planning, pricing, and selling skills.",
        image: "https://images.pexels.com/photos/6615292/pexels-photo-6615292.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Teen business plan workbook",
        products: [
            { src: "https://images.pexels.com/photos/6615292/pexels-photo-6615292.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Teen business plan workbook", name: "Teen Business Plan Workbook", price: 19.99 },
            { src: "https://images.pexels.com/photos/7414048/pexels-photo-7414048.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Young entrepreneur guide book", name: "Young Entrepreneur Guide", price: 17.99 },
            { src: "https://images.pexels.com/photos/8541303/pexels-photo-8541303.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Lemonade stand kit", name: "Lemonade Stand Starter Kit", price: 34.99 },
            { src: "https://images.pexels.com/photos/8761336/pexels-photo-8761336.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Business pitch card game", name: "Business Pitch Card Game", price: 18.95 }
        ],
    },
    {
        id: "civics-personal-finance-teens",
        category: "Social Studies - Civics and Economics",
        title: "Personal Finance Basics for Teens Set",
        description: "Build budgeting, saving, and investing habits that last into adulthood.",
        image: "https://images.pexels.com/photos/7111496/pexels-photo-7111496.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Teen budgeting workbook",
        products: [
            { src: "https://images.pexels.com/photos/7111496/pexels-photo-7111496.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Teen budgeting workbook", name: "Teen Budgeting Workbook", price: 18.99 },
            { src: "https://images.pexels.com/photos/9821387/pexels-photo-9821387.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Savings goal tracker", name: "Savings Goal Tracker Pad", price: 9.99 },
            { src: "https://images.pexels.com/photos/10653886/pexels-photo-10653886.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Investing basics for teens book", name: "Investing Basics for Teens Book", price: 16.99 },
            { src: "https://images.pexels.com/photos/4792369/pexels-photo-4792369.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Personal finance board game", name: "Personal Finance Board Game", price: 29.99 }
        ],
    },
    {
        id: "art-drawing-basics",
        category: "Art",
        title: "Drawing Basics Set",
        description: "Essential pencils, paper, and tools for learning foundational drawing skills.",
        image: "https://images.pexels.com/photos/8580767/pexels-photo-8580767.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Drawing pencils set",
        products: [
            { src: "https://images.pexels.com/photos/8580767/pexels-photo-8580767.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Drawing pencils set", name: "Drawing Pencils Set", price: 12.99 },
            { src: "https://images.pexels.com/photos/34624877/pexels-photo-34624877/free-photo-of-art-sketchbook-with-pencil-drawings-on-table.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Sketchbook", name: "Sketchbook", price: 16.99 },
            { src: "https://images.pexels.com/photos/1111692/pexels-photo-1111692.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Blending stumps", name: "Blending Stumps", price: 7.99 },
            { src: "https://images.pexels.com/photos/6368904/pexels-photo-6368904.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Kneaded erasers", name: "Kneaded Erasers", price: 5.99 }
        ],
    },
    {
        id: "art-painting-watercolor",
        category: "Art",
        title: "Painting and Watercolor Set",
        description: "Watercolor paints, brushes, and paper for exploring painting techniques.",
        image: "https://images.pexels.com/photos/6925018/pexels-photo-6925018.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Watercolor paint set",
        products: [
            { src: "https://images.pexels.com/photos/6925018/pexels-photo-6925018.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Watercolor paint set", name: "Watercolor Paint Set", price: 24.99 },
            { src: "https://images.pexels.com/photos/6487191/pexels-photo-6487191.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Watercolor paper pad", name: "Watercolor Paper Pad", price: 13.99 },
            { src: "https://images.pexels.com/photos/7859265/pexels-photo-7859265.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Watercolor brush set", name: "Watercolor Brush Set", price: 18.99 },
            { src: "https://images.pexels.com/photos/16207584/pexels-photo-16207584/free-photo-of-close-up-of-mixed-paint-and-spatulas-on-a-palette.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Mixing palette", name: "Mixing Palette", price: 9.99 }
        ],
    },
    {
        id: "art-sculpture-clay",
        category: "Art",
        title: "Sculpture and Clay Set",
        description: "Clay and sculpting tools for building three-dimensional art projects.",
        image: "https://images.pexels.com/photos/34470066/pexels-photo-34470066/free-photo-of-close-up-of-hands-molding-clay-on-pottery-wheel.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Air-dry clay",
        products: [
            { src: "https://images.pexels.com/photos/34470066/pexels-photo-34470066/free-photo-of-close-up-of-hands-molding-clay-on-pottery-wheel.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Air-dry clay", name: "Air-Dry Clay", price: 14.99 },
            { src: "https://images.pexels.com/photos/6023573/pexels-photo-6023573.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Sculpting tools", name: "Sculpting Tools", price: 16.99 },
            { src: "https://images.pexels.com/photos/7302489/pexels-photo-7302489.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Modeling board", name: "Modeling Board", price: 11.99 },
            { src: "https://images.pexels.com/photos/13512284/pexels-photo-13512284.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Clay cutters", name: "Clay Cutters", price: 8.99 }
        ],
    },
    {
        id: "art-color-theory",
        category: "Art",
        title: "Color Theory Set",
        description: "Hands-on materials for learning color mixing, harmony, and relationships.",
        image: "https://images.pexels.com/photos/4460007/pexels-photo-4460007.png?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Color wheel guide",
        products: [
            { src: "https://images.pexels.com/photos/4460007/pexels-photo-4460007.png?auto=compress&cs=tinysrgb&w=800", alt: "Color wheel guide", name: "Color Wheel Guide", price: 9.99 },
            { src: "https://images.pexels.com/photos/68808/pexels-photo-68808.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Colored pencils set", name: "Colored Pencils Set", price: 19.99 },
            { src: "https://images.pexels.com/photos/30825649/pexels-photo-30825649/free-photo-of-livlig-mandalafargning-med-pennor-i-istanbul.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Color theory book", name: "Color Theory Book", price: 21.99 },
            { src: "https://images.pexels.com/photos/29279343/pexels-photo-29279343/free-photo-of-materiales-de-arte-coloridos-en-una-caja-de-madera.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Gouache paint set", name: "Gouache Paint Set", price: 22.99 }
        ],
    },
    {
        id: "art-art-history",
        category: "Art",
        title: "Art History Set",
        description: "Books and visual references for exploring famous artists, movements, and eras.",
        image: "https://images.pexels.com/photos/33516927/pexels-photo-33516927/free-photo-of-historical-artwork-displayed-in-modern-museum.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Art history survey book",
        products: [
            { src: "https://images.pexels.com/photos/33516927/pexels-photo-33516927/free-photo-of-historical-artwork-displayed-in-modern-museum.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Art history survey book", name: "Art History Survey Book", price: 29.99 },
            { src: "https://images.pexels.com/photos/18250532/pexels-photo-18250532/free-photo-of-paintings-exhibition-in-art-gallery.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Famous paintings posters", name: "Famous Paintings Posters", price: 14.99 },
            { src: "https://images.pexels.com/photos/1671016/pexels-photo-1671016.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Artist biographies book", name: "Artist Biographies Book", price: 18.99 },
            { src: "https://images.pexels.com/photos/40007136/pexels-photo-40007136/free-photo-of-art-gallery-in-cambridge-with-classic-paintings.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Art timeline poster", name: "Art Timeline Poster", price: 12.99 }
        ],
    },
    {
        id: "music-piano-keyboard",
        category: "Music",
        title: "Piano & Keyboard Starter Set",
        description: "Everything a beginner needs to start learning piano and keyboard.",
        image: "https://images.pexels.com/photos/8520513/pexels-photo-8520513.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "61-key keyboard piano",
        products: [
            { src: "https://images.pexels.com/photos/8520513/pexels-photo-8520513.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "61-key keyboard piano", name: "61-Key Keyboard Piano", price: 129.99 },
            { src: "https://images.pexels.com/photos/7577261/pexels-photo-7577261.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Adjustable piano bench", name: "Adjustable Piano Bench", price: 49.99 },
            { src: "https://images.pexels.com/photos/36587441/pexels-photo-36587441/free-photo-of-open-music-book-on-upright-piano-under-lamp.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Beginner piano lesson book", name: "Beginner Piano Lesson Book", price: 19.99 },
            { src: "https://images.pexels.com/photos/6647423/pexels-photo-6647423.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Keyboard sustain pedal", name: "Keyboard Sustain Pedal", price: 24.99 }
        ],
    },
    {
        id: "music-guitar-ukulele",
        category: "Music",
        title: "Guitar & Ukulele Starter Set",
        description: "Start strumming with guitar and ukulele essentials for beginners.",
        image: "https://images.pexels.com/photos/7558112/pexels-photo-7558112.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Beginner acoustic guitar",
        products: [
            { src: "https://images.pexels.com/photos/7558112/pexels-photo-7558112.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Beginner acoustic guitar", name: "Beginner Acoustic Guitar", price: 149.99 },
            { src: "https://images.pexels.com/photos/6564813/pexels-photo-6564813.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Soprano ukulele", name: "Soprano Ukulele", price: 59.99 },
            { src: "https://images.pexels.com/photos/4090854/pexels-photo-4090854.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Clip-on guitar tuner", name: "Clip-On Tuner", price: 14.99 },
            { src: "https://images.pexels.com/photos/9664315/pexels-photo-9664315.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Guitar chord book", name: "Guitar Chord Book", price: 16.99 }
        ],
    },
    {
        id: "music-rhythm-percussion",
        category: "Music",
        title: "Rhythm & Percussion Set",
        description: "Hands-on instruments for learning beat, rhythm, and timing.",
        image: "https://images.pexels.com/photos/6193720/pexels-photo-6193720.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Hand drum",
        products: [
            { src: "https://images.pexels.com/photos/6193720/pexels-photo-6193720.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Hand drum", name: "Hand Drum", price: 39.99 },
            { src: "https://images.pexels.com/photos/7285220/pexels-photo-7285220.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Tambourine", name: "Tambourine", price: 12.99 },
            { src: "https://images.pexels.com/photos/34764523/pexels-photo-34764523/free-photo-of-close-up-of-drumsticks-on-a-cymbal-with-moody-lighting.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Pair of rhythm sticks", name: "Rhythm Sticks Pair", price: 9.99 },
            { src: "https://images.pexels.com/photos/11961176/pexels-photo-11961176.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Metronome", name: "Metronome", price: 29.99 }
        ],
    },
    {
        id: "music-theory-reading",
        category: "Music",
        title: "Music Theory & Reading Music Set",
        description: "Books and tools for reading sheet music and understanding music theory.",
        image: "https://images.pexels.com/photos/1718380/pexels-photo-1718380.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Music theory workbook",
        products: [
            { src: "https://images.pexels.com/photos/1718380/pexels-photo-1718380.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Music theory workbook", name: "Music Theory Workbook", price: 24.99 },
            { src: "https://images.pexels.com/photos/18069242/pexels-photo-18069242/free-photo-of-sheet-music-stand-in-studio.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Sheet music stand", name: "Sheet Music Stand", price: 34.99 },
            { src: "https://images.pexels.com/photos/4146641/pexels-photo-4146641.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Music note flash cards", name: "Music Note Flash Cards", price: 11.99 },
            { src: "https://images.pexels.com/photos/5070026/pexels-photo-5070026.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Blank sheet music notebook", name: "Blank Sheet Music Notebook", price: 12.99 }
        ],
    },
    {
        id: "music-singing-vocal",
        category: "Music",
        title: "Singing & Vocal Practice Set",
        description: "Tools for warming up, practicing pitch, and building vocal confidence.",
        image: "https://images.pexels.com/photos/8412351/pexels-photo-8412351.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Vocal exercises book",
        products: [
            { src: "https://images.pexels.com/photos/8412351/pexels-photo-8412351.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Vocal exercises book", name: "Vocal Exercises Book", price: 18.99 },
            { src: "https://images.pexels.com/photos/586416/pexels-photo-586416.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Practice microphone", name: "Practice Microphone", price: 49.99 },
            { src: "https://images.pexels.com/photos/10977669/pexels-photo-10977669.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Chromatic pitch pipe", name: "Chromatic Pitch Pipe", price: 9.99 },
            { src: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Microphone stand", name: "Microphone Stand", price: 29.99 }
        ],
    },
    {
        id: "pe-soccer-training",
        category: "Physical Education (PE)",
        title: "Soccer Training Set",
        description: "Build footwork, passing, and teamwork with everything needed for soccer practice at home.",
        image: "https://images.pexels.com/photos/38275739/pexels-photo-38275739/free-photo-of-soccer-ball-on-green-field-at-sunset.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Soccer ball",
        products: [
            { src: "https://images.pexels.com/photos/38275739/pexels-photo-38275739/free-photo-of-soccer-ball-on-green-field-at-sunset.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Soccer ball", name: "Soccer Ball", price: 24.99 },
            { src: "https://images.pexels.com/photos/27404658/pexels-photo-27404658/free-photo-of-a-soccer-goal-with-a-red-and-white-stripe.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Pop-up soccer goals", name: "Pop-Up Soccer Goals", price: 39.99 },
            { src: "https://images.pexels.com/photos/5424530/pexels-photo-5424530.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Shin guards", name: "Shin Guards", price: 14.99 },
            { src: "https://images.pexels.com/photos/29485141/pexels-photo-29485141/free-photo-of-soccer-training-field-with-cones-and-ball.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Agility cones", name: "Agility Cones", price: 12.99 }
        ],
    },
    {
        id: "pe-basketball-training",
        category: "Physical Education (PE)",
        title: "Basketball Training Set",
        description: "Practice shooting, dribbling, and footwork with a complete at-home basketball setup.",
        image: "https://images.pexels.com/photos/34688570/pexels-photo-34688570/free-photo-of-two-basketballs-on-blue-indoor-court.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Basketball",
        products: [
            { src: "https://images.pexels.com/photos/34688570/pexels-photo-34688570/free-photo-of-two-basketballs-on-blue-indoor-court.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Basketball", name: "Basketball", price: 29.99 },
            { src: "https://images.pexels.com/photos/965622/pexels-photo-965622.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Portable basketball hoop", name: "Portable Basketball Hoop", price: 119.99 },
            { src: "https://images.pexels.com/photos/39423291/pexels-photo-39423291/free-photo-of-athlete-training-with-ladder-drills-outdoors.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Agility ladder", name: "Agility Ladder", price: 19.99 },
            { src: "https://images.pexels.com/photos/16499008/pexels-photo-16499008/free-photo-of-man-inflating-football-ball.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Basketball pump", name: "Basketball Pump", price: 11.99 }
        ],
    },
    {
        id: "pe-yoga-mindfulness",
        category: "Physical Education (PE)",
        title: "Yoga & Mindfulness Set",
        description: "Build flexibility, balance, and calm focus through guided yoga and mindfulness movement.",
        image: "https://images.pexels.com/photos/4325462/pexels-photo-4325462.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Yoga mat",
        products: [
            { src: "https://images.pexels.com/photos/4325462/pexels-photo-4325462.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Yoga mat", name: "Yoga Mat", price: 34.99 },
            { src: "https://images.pexels.com/photos/6752177/pexels-photo-6752177.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Yoga blocks", name: "Yoga Blocks", price: 19.99 },
            { src: "https://images.pexels.com/photos/35225488/pexels-photo-35225488/free-photo-of-yoga-strap-on-cork-block-with-shadow-play.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Yoga strap", name: "Yoga Strap", price: 9.99 },
            { src: "https://images.pexels.com/photos/20512322/pexels-photo-20512322/free-photo-of-soft-comfy-pillows-on-wooden-floor.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Meditation cushion", name: "Meditation Cushion", price: 29.99 }
        ],
    },
    {
        id: "pe-jump-rope-fitness",
        category: "Physical Education (PE)",
        title: "Jump Rope & Fitness Set",
        description: "Build coordination, stamina, and strength with versatile everyday fitness equipment.",
        image: "https://images.pexels.com/photos/6339692/pexels-photo-6339692.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Jump rope",
        products: [
            { src: "https://images.pexels.com/photos/6339692/pexels-photo-6339692.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Jump rope", name: "Jump Rope", price: 12.99 },
            { src: "https://images.pexels.com/photos/6740819/pexels-photo-6740819.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Resistance bands set", name: "Resistance Bands Set", price: 24.99 },
            { src: "https://images.pexels.com/photos/7671458/pexels-photo-7671458.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Exercise ball", name: "Exercise Ball", price: 18.99 },
            { src: "https://images.pexels.com/photos/16513603/pexels-photo-16513603/free-photo-of-close-up-of-a-roller-for-muscles.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Foam roller", name: "Foam Roller", price: 21.99 }
        ],
    },
    {
        id: "pe-outdoor-adventure",
        category: "Physical Education (PE)",
        title: "Outdoor Adventure Set",
        description: "Explore trails safely while learning navigation, observation, and outdoor readiness.",
        image: "https://images.pexels.com/photos/30829443/pexels-photo-30829443/free-photo-of-mountain-hiking-backpack-in-tatra-mountains.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Hiking backpack",
        products: [
            { src: "https://images.pexels.com/photos/30829443/pexels-photo-30829443/free-photo-of-mountain-hiking-backpack-in-tatra-mountains.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Hiking backpack", name: "Hiking Backpack", price: 49.99 },
            { src: "https://images.pexels.com/photos/10582935/pexels-photo-10582935.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Insulated water bottle", name: "Insulated Water Bottle", price: 22.99 },
            { src: "https://images.pexels.com/photos/5537640/pexels-photo-5537640.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Compact binoculars", name: "Compact Binoculars", price: 29.99 },
            { src: "https://images.pexels.com/photos/9906080/pexels-photo-9906080.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Trail compass", name: "Trail Compass", price: 12.99 }
        ],
    },
    {
        id: "health-cooking-nutrition",
        category: "Health and Life Skills",
        title: "Cooking & Nutrition Basics",
        description: "Hands-on tools for learning to cook healthy meals and understand nutrition.",
        image: "https://images.pexels.com/photos/8511864/pexels-photo-8511864.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Children's cookbook",
        products: [
            { src: "https://images.pexels.com/photos/8511864/pexels-photo-8511864.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Children's cookbook", name: "Children's Cookbook", price: 18.99 },
            { src: "https://images.pexels.com/photos/38848778/pexels-photo-38848778/free-photo-of-essential-kitchen-tools-on-wooden-surface.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Measuring cups and spoons set", name: "Measuring Cups & Spoons Set", price: 14.95 },
            { src: "https://images.pexels.com/photos/6996092/pexels-photo-6996092.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Kid-safe knife set", name: "Kid-Safe Knife Set", price: 19.99 },
            { src: "https://images.pexels.com/photos/5966143/pexels-photo-5966143.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Nutrition food groups chart", name: "Nutrition Food Groups Chart", price: 12.99 }
        ],
    },
    {
        id: "health-first-aid-safety",
        category: "Health and Life Skills",
        title: "First Aid & Safety Basics",
        description: "Essential supplies for learning first aid basics and staying safe every day.",
        image: "https://images.pexels.com/photos/5125748/pexels-photo-5125748.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "First aid kit",
        products: [
            { src: "https://images.pexels.com/photos/5125748/pexels-photo-5125748.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "First aid kit", name: "First Aid Kit", price: 24.99 },
            { src: "https://images.pexels.com/photos/34104787/pexels-photo-34104787/free-photo-of-cpr-training-demonstration-on-mannequin.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "CPR training kit", name: "CPR Training Kit", price: 39.99 },
            { src: "https://images.pexels.com/photos/8943188/pexels-photo-8943188.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "First aid guide book", name: "First Aid Guide Book", price: 15.99 },
            { src: "https://images.pexels.com/photos/19351987/pexels-photo-19351987/free-photo-of-a-helmet-design.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Bike safety helmet", name: "Bike Safety Helmet", price: 29.99 }
        ],
    },
    {
        id: "health-gardening-growing-food",
        category: "Health and Life Skills",
        title: "Gardening & Growing Food",
        description: "Everything needed to plant, grow, and harvest food while learning plant science.",
        image: "https://images.pexels.com/photos/7782889/pexels-photo-7782889.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Vegetable seed starter kit",
        products: [
            { src: "https://images.pexels.com/photos/7782889/pexels-photo-7782889.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Vegetable seed starter kit", name: "Vegetable Seed Starter Kit", price: 16.99 },
            { src: "https://images.pexels.com/photos/9507250/pexels-photo-9507250.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Gardening tools set", name: "Gardening Tools Set", price: 22.99 },
            { src: "https://images.pexels.com/photos/6912804/pexels-photo-6912804.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Watering can", name: "Watering Can", price: 18.99 },
            { src: "https://images.pexels.com/photos/7342626/pexels-photo-7342626.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Gardening journal", name: "Gardening Journal", price: 11.99 }
        ],
    },
    {
        id: "health-home-skills",
        category: "Health and Life Skills",
        title: "Home Skills & Home Economics",
        description: "Practical tools for learning sewing, mending, and everyday household skills.",
        image: "https://images.pexels.com/photos/15055154/pexels-photo-15055154/free-photo-of-afficher-equipement-materiel-accessoires.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Beginner sewing kit",
        products: [
            { src: "https://images.pexels.com/photos/15055154/pexels-photo-15055154/free-photo-of-afficher-equipement-materiel-accessoires.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Beginner sewing kit", name: "Beginner Sewing Kit", price: 21.99 },
            { src: "https://images.pexels.com/photos/36293914/pexels-photo-36293914/free-photo-of-colorful-textile-fabric-pattern-display.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Fabric squares bundle", name: "Fabric Squares Bundle", price: 12.99 },
            { src: "https://images.pexels.com/photos/6461164/pexels-photo-6461164.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Mending and buttons kit", name: "Mending & Buttons Kit", price: 9.99 },
            { src: "https://images.pexels.com/photos/2030476/pexels-photo-2030476.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Household skills workbook", name: "Household Skills Workbook", price: 16.99 }
        ],
    },
    {
        id: "health-emotional-wellness",
        category: "Health and Life Skills",
        title: "Emotional Wellness & Healthy Habits",
        description: "Calming tools for naming feelings, building mindfulness, and forming healthy habits.",
        image: "https://images.pexels.com/photos/6348292/pexels-photo-6348292.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Emotions flashcards",
        products: [
            { src: "https://images.pexels.com/photos/6348292/pexels-photo-6348292.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Emotions flashcards", name: "Emotions Flashcards", price: 14.99 },
            { src: "https://images.pexels.com/photos/6653907/pexels-photo-6653907.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Mindfulness journal", name: "Mindfulness Journal", price: 15.99 },
            { src: "https://images.pexels.com/photos/6707460/pexels-photo-6707460.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Calm-down kit", name: "Calm-Down Kit", price: 24.99 },
            { src: "https://images.pexels.com/photos/6862843/pexels-photo-6862843.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Daily routine chart", name: "Daily Routine Chart", price: 11.99 }
        ],
    },
    {
        id: "spanish-beginner",
        category: "World Language - Spanish",
        title: "Beginner Spanish Starter Set",
        description: "Everything needed to start speaking and understanding basic Spanish.",
        image: "https://images.pexels.com/photos/5408919/pexels-photo-5408919.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Beginner Spanish workbook",
        products: [
            { src: "https://images.pexels.com/photos/5408919/pexels-photo-5408919.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Beginner Spanish workbook", name: "Beginner Spanish Workbook", price: 24.99 },
            { src: "https://images.pexels.com/photos/6795596/pexels-photo-6795596.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish alphabet flashcards", name: "Spanish Alphabet Flashcards", price: 12.95 },
            { src: "https://images.pexels.com/photos/6157219/pexels-photo-6157219.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish picture dictionary", name: "Spanish Picture Dictionary", price: 18.99 },
            { src: "https://images.pexels.com/photos/3756776/pexels-photo-3756776.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish pronunciation audio course", name: "Spanish Pronunciation Audio Course", price: 29.99 }
        ],
    },
    {
        id: "spanish-conversational",
        category: "World Language - Spanish",
        title: "Conversational Spanish Practice Set",
        description: "Build confidence speaking Spanish in everyday conversations.",
        image: "https://images.pexels.com/photos/23496898/pexels-photo-23496898.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Spanish conversation practice cards",
        products: [
            { src: "https://images.pexels.com/photos/23496898/pexels-photo-23496898.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish conversation practice cards", name: "Spanish Conversation Practice Cards", price: 16.99 },
            { src: "https://images.pexels.com/photos/7770515/pexels-photo-7770515.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish phrasebook", name: "Spanish Phrasebook for Everyday Situations", price: 14.95 },
            { src: "https://images.pexels.com/photos/7237211/pexels-photo-7237211.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish dialogue workbook", name: "Spanish Dialogue Workbook", price: 21.99 },
            { src: "https://images.pexels.com/photos/6920075/pexels-photo-6920075.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish conversation audio practice", name: "Spanish Conversation Audio Practice", price: 27.99 }
        ],
    },
    {
        id: "spanish-grammar",
        category: "World Language - Spanish",
        title: "Spanish Grammar Essentials Set",
        description: "Master Spanish verbs, sentence structure, and grammar rules.",
        image: "https://images.pexels.com/photos/5676740/pexels-photo-5676740.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Spanish grammar workbook",
        products: [
            { src: "https://images.pexels.com/photos/5676740/pexels-photo-5676740.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish grammar workbook", name: "Spanish Grammar Workbook", price: 26.99 },
            { src: "https://images.pexels.com/photos/7521313/pexels-photo-7521313.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish verb conjugation charts", name: "Spanish Verb Conjugation Charts", price: 9.99 },
            { src: "https://images.pexels.com/photos/6549353/pexels-photo-6549353.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish grammar flashcards", name: "Spanish Grammar Flashcards", price: 13.99 },
            { src: "https://images.pexels.com/photos/5702287/pexels-photo-5702287.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish verb practice workbook", name: "Spanish Verb Practice Workbook", price: 19.99 }
        ],
    },
    {
        id: "spanish-culture",
        category: "World Language - Spanish",
        title: "Spanish Culture Exploration Set",
        description: "Explore the food, festivals, art, and traditions of Spanish-speaking cultures.",
        image: "https://images.pexels.com/photos/30102824/pexels-photo-30102824/free-photo-of-dynamic-flamenco-dancer-with-red-fan-in-studio.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Spanish culture exploration book",
        products: [
            { src: "https://images.pexels.com/photos/30102824/pexels-photo-30102824/free-photo-of-dynamic-flamenco-dancer-with-red-fan-in-studio.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish culture exploration book", name: "Spanish Culture Exploration Book", price: 22.99 },
            { src: "https://images.pexels.com/photos/1298930/pexels-photo-1298930.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish festivals poster set", name: "Spanish Festivals Poster Set", price: 11.95 },
            { src: "https://images.pexels.com/photos/4009549/pexels-photo-4009549.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Latin American art activity book", name: "Latin American Art Activity Book", price: 16.99 },
            { src: "https://images.pexels.com/photos/35353127/pexels-photo-35353127/free-photo-of-deliziosa-paella-di-pesce-con-gamberi-in-preparazione.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish cooking activity book", name: "Spanish Cooking Activity Book", price: 19.99 }
        ],
    },
    {
        id: "spanish-reading",
        category: "World Language - Spanish",
        title: "Reading in Spanish Set",
        description: "Grow Spanish reading skills with graded stories and bilingual books.",
        image: "https://images.pexels.com/photos/7034105/pexels-photo-7034105.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Spanish short stories book",
        products: [
            { src: "https://images.pexels.com/photos/7034105/pexels-photo-7034105.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish short stories book", name: "Spanish Short Stories for Beginners", price: 17.99 },
            { src: "https://images.pexels.com/photos/8466766/pexels-photo-8466766.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish bilingual storybook", name: "Spanish Bilingual Storybook", price: 15.99 },
            { src: "https://images.pexels.com/photos/10638208/pexels-photo-10638208.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish graded reader", name: "Spanish Graded Reader", price: 19.95 },
            { src: "https://images.pexels.com/photos/8055114/pexels-photo-8055114.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Spanish reading comprehension workbook", name: "Spanish Reading Comprehension Workbook", price: 21.99 }
        ],
    },
    {
        id: "language-french",
        category: "World Language - Other Languages",
        title: "French Beginner Set",
        description: "Build everyday French vocabulary, verbs, and reading confidence.",
        image: "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "French picture dictionary",
        products: [
            { src: "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "French picture dictionary", name: "French Picture Dictionary", price: 24.99 },
            { src: "https://images.pexels.com/photos/8363039/pexels-photo-8363039.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "French flashcards", name: "French Flashcards", price: 14.95 },
            { src: "https://images.pexels.com/photos/10987722/pexels-photo-10987722.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "French verb conjugation chart", name: "French Verb Conjugation Chart", price: 12.99 },
            { src: "https://images.pexels.com/photos/32759379/pexels-photo-32759379/free-photo-of-femme-se-relaxant-a-l-interieur-en-lisant-un-livre.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "French beginner storybook", name: "French Beginner Storybook", price: 18.99 }
        ],
    },
    {
        id: "language-mandarin",
        category: "World Language - Other Languages",
        title: "Mandarin Chinese Starter Set",
        description: "Learn Mandarin characters, pinyin, tones, and simple stories.",
        image: "https://images.pexels.com/photos/2155527/pexels-photo-2155527.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Mandarin character workbook",
        products: [
            { src: "https://images.pexels.com/photos/2155527/pexels-photo-2155527.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Mandarin character workbook", name: "Mandarin Character Workbook", price: 19.99 },
            { src: "https://images.pexels.com/photos/30203225/pexels-photo-30203225.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Mandarin flashcards", name: "Mandarin Flashcards", price: 16.99 },
            { src: "https://images.pexels.com/photos/9478291/pexels-photo-9478291.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Mandarin pinyin and tones chart", name: "Mandarin Pinyin and Tones Chart", price: 11.99 },
            { src: "https://images.pexels.com/photos/11217935/pexels-photo-11217935.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Mandarin beginner storybook", name: "Mandarin Beginner Storybook", price: 21.99 }
        ],
    },
    {
        id: "language-asl",
        category: "World Language - Other Languages",
        title: "American Sign Language Set",
        description: "Learn ASL signs, fingerspelling, and everyday conversations.",
        image: "https://images.pexels.com/photos/9017405/pexels-photo-9017405.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "American Sign Language dictionary",
        products: [
            { src: "https://images.pexels.com/photos/9017405/pexels-photo-9017405.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "American Sign Language dictionary", name: "ASL Sign Language Dictionary", price: 27.99 },
            { src: "https://images.pexels.com/photos/36562701/pexels-photo-36562701/free-photo-of-hands-making-sign-language-gesture-indoors.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "ASL flashcards", name: "ASL Flashcards", price: 15.99 },
            { src: "https://images.pexels.com/photos/9017412/pexels-photo-9017412.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "ASL fingerspelling chart", name: "ASL Fingerspelling Chart", price: 9.99 },
            { src: "https://images.pexels.com/photos/9017406/pexels-photo-9017406.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "ASL practice workbook", name: "ASL Practice Workbook", price: 18.99 }
        ],
    },
    {
        id: "language-latin-roots",
        category: "World Language - Other Languages",
        title: "Latin and Word Roots Set",
        description: "Explore Latin vocabulary, grammar, and English word roots.",
        image: "https://images.pexels.com/photos/34129084/pexels-photo-34129084/free-photo-of-arquitectura-romana-antigua-de-las-ruinas-de-la-biblioteca.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Latin and word roots workbook",
        products: [
            { src: "https://images.pexels.com/photos/34129084/pexels-photo-34129084/free-photo-of-arquitectura-romana-antigua-de-las-ruinas-de-la-biblioteca.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Latin and word roots workbook", name: "Latin and Word Roots Workbook", price: 19.99 },
            { src: "https://images.pexels.com/photos/36585209/pexels-photo-36585209/free-photo-of-rooman-foorumin-temppelin-rauniot-roomassa-italiassa.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Latin vocabulary flashcards", name: "Latin Vocabulary Flashcards", price: 14.99 },
            { src: "https://images.pexels.com/photos/36306963/pexels-photo-36306963/free-photo-of-ancient-manuscript-with-arabic-script-displayed-open.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Latin grammar chart", name: "Latin Grammar Chart", price: 12.99 },
            { src: "https://images.pexels.com/photos/13586596/pexels-photo-13586596.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Latin mythology reader", name: "Latin Mythology Reader", price: 22.99 }
        ],
    },
    {
        id: "language-german",
        category: "World Language - Other Languages",
        title: "German Intro Set",
        description: "Start German with vocabulary, verbs, and beginner reading.",
        image: "https://images.pexels.com/photos/10168058/pexels-photo-10168058.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "German picture dictionary",
        products: [
            { src: "https://images.pexels.com/photos/10168058/pexels-photo-10168058.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "German picture dictionary", name: "German Picture Dictionary", price: 24.99 },
            { src: "https://images.pexels.com/photos/8199628/pexels-photo-8199628.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "German flashcards", name: "German Flashcards", price: 14.95 },
            { src: "https://images.pexels.com/photos/9158795/pexels-photo-9158795.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "German verb chart", name: "German Verb Chart", price: 12.99 },
            { src: "https://images.pexels.com/photos/20594466/pexels-photo-20594466.png?auto=compress&cs=tinysrgb&w=800", alt: "German beginner reader", name: "German Beginner Reader", price: 17.99 }
        ],
    },
    {
        id: "lab-kitchen-chemistry",
        category: "Science - Hands-On Experiments",
        title: "Kitchen Chemistry Lab Set",
        description: "Safe, hands-on chemistry experiments using everyday kitchen materials.",
        image: "https://images.pexels.com/photos/7230177/pexels-photo-7230177.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Kitchen Chemistry Lab Set",
        products: [
            { src: "https://images.pexels.com/photos/7230177/pexels-photo-7230177.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Kitchen chemistry experiment kit", name: "Kitchen Chemistry Experiment Kit", price: 24.99 },
            { src: "https://images.pexels.com/photos/8442819/pexels-photo-8442819.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Safety goggles", name: "Safety Goggles", price: 9.99 },
            { src: "https://images.pexels.com/photos/8325716/pexels-photo-8325716.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Measuring beakers set", name: "Measuring Beakers Set", price: 14.99 },
            { src: "https://images.pexels.com/photos/4434754/pexels-photo-4434754.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "pH test strips", name: "pH Test Strips", price: 7.99 }
        ],
    },
    {
        id: "lab-volcano-earth-experiments",
        category: "Science - Hands-On Experiments",
        title: "Volcano & Earth Experiments Set",
        description: "Build, erupt, and explore volcanoes, rocks, fossils, and Earth's layers.",
        image: "https://images.pexels.com/photos/15973991/pexels-photo-15973991.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Volcano & Earth Experiments Set",
        products: [
            { src: "https://images.pexels.com/photos/15973991/pexels-photo-15973991.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Volcano eruption kit", name: "Volcano Eruption Kit", price: 19.99 },
            { src: "https://images.pexels.com/photos/4464467/pexels-photo-4464467.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Rock and mineral collection", name: "Rock and Mineral Collection", price: 16.99 },
            { src: "https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Earth layers model kit", name: "Earth Layers Model Kit", price: 22.99 },
            { src: "https://images.pexels.com/photos/34522429/pexels-photo-34522429/free-photo-of-majestic-dinosaur-skeleton-in-museum-exhibit.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Fossil excavation kit", name: "Fossil Excavation Kit", price: 12.99 }
        ],
    },
    {
        id: "lab-microscope-exploration",
        category: "Science - Hands-On Experiments",
        title: "Microscope Exploration Set",
        description: "Discover the microscopic world with slides, specimens, and hands-on observation.",
        image: "https://images.pexels.com/photos/8471938/pexels-photo-8471938.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Microscope Exploration Set",
        products: [
            { src: "https://images.pexels.com/photos/8471938/pexels-photo-8471938.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Beginner microscope", name: "Beginner Microscope", price: 49.99 },
            { src: "https://images.pexels.com/photos/5721685/pexels-photo-5721685.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Prepared microscope slides set", name: "Prepared Microscope Slides Set", price: 15.99 },
            { src: "https://images.pexels.com/photos/8442898/pexels-photo-8442898.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Blank slides and coverslips", name: "Blank Slides and Coverslips", price: 8.99 },
            { src: "https://images.pexels.com/photos/13028557/pexels-photo-13028557.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Specimen collection kit", name: "Specimen Collection Kit", price: 11.99 }
        ],
    },
    {
        id: "lab-electricity-magnetism",
        category: "Science - Hands-On Experiments",
        title: "Electricity & Magnetism Experiments Set",
        description: "Build simple circuits and explore magnets, compasses, and electric current.",
        image: "https://images.pexels.com/photos/7285982/pexels-photo-7285982.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Electricity & Magnetism Experiments Set",
        products: [
            { src: "https://images.pexels.com/photos/7285982/pexels-photo-7285982.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Electricity circuit experiment kit", name: "Electricity Circuit Experiment Kit", price: 29.99 },
            { src: "https://images.pexels.com/photos/38412989/pexels-photo-38412989.png?auto=compress&cs=tinysrgb&w=800", alt: "Bar magnets set", name: "Bar Magnets Set", price: 12.99 },
            { src: "https://images.pexels.com/photos/17184739/pexels-photo-17184739/free-photo-of-paisaje-direccion-viaje-viajar.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Compass exploration kit", name: "Compass Exploration Kit", price: 9.99 },
            { src: "https://images.pexels.com/photos/35673089/pexels-photo-35673089/free-photo-of-farbige-verkabelung-und-akku-fur-robotik.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Wire and battery pack", name: "Wire and Battery Pack", price: 10.99 }
        ],
    },
    {
        id: "lab-nature-field-science",
        category: "Science - Hands-On Experiments",
        title: "Nature Observation & Field Science Set",
        description: "Observe, record, and explore plants, insects, and wildlife outdoors.",
        image: "https://images.pexels.com/photos/6034151/pexels-photo-6034151.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Nature Observation & Field Science Set",
        products: [
            { src: "https://images.pexels.com/photos/6034151/pexels-photo-6034151.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Nature observation journal", name: "Nature Observation Journal", price: 10.99 },
            { src: "https://images.pexels.com/photos/36203750/pexels-photo-36203750.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Field binoculars", name: "Field Binoculars", price: 19.99 },
            { src: "https://images.pexels.com/photos/3074542/pexels-photo-3074542.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Magnifying glass", name: "Magnifying Glass", price: 7.99 },
            { src: "https://images.pexels.com/photos/13898833/pexels-photo-13898833.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Bug catcher and viewer", name: "Bug Catcher and Viewer", price: 11.99 }
        ],
    },
    {
        id: "preschool-colors-shapes",
        category: "Early Childhood - Preschool",
        title: "Colors & Shapes Discovery Set",
        description: "Sort, match, and build with bright colors and classic shapes.",
        image: "https://images.pexels.com/photos/6692931/pexels-photo-6692931.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Colors and shapes discovery set",
        products: [
            { src: "https://images.pexels.com/photos/6692931/pexels-photo-6692931.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Color sorting bears", name: "Color Sorting Bears", price: 16.99 },
            { src: "https://images.pexels.com/photos/6692950/pexels-photo-6692950.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Wooden shape puzzle", name: "Wooden Shape Puzzle", price: 14.99 },
            { src: "https://images.pexels.com/photos/8504536/pexels-photo-8504536.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Stacking shape blocks", name: "Stacking Shape Blocks", price: 19.99 },
            { src: "https://images.pexels.com/photos/7138917/pexels-photo-7138917.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Color mixing art set", name: "Color Mixing Art Set", price: 12.99 }
        ],
    },
    {
        id: "preschool-sensory-play",
        category: "Early Childhood - Preschool",
        title: "Sensory Play Exploration Set",
        description: "Hands-on textures and materials for curious little explorers.",
        image: "https://images.pexels.com/photos/33357398/pexels-photo-33357398/free-photo-of-child-playing-with-colorful-toys-at-indoor-play-area.png?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Sensory play exploration set",
        products: [
            { src: "https://images.pexels.com/photos/33357398/pexels-photo-33357398/free-photo-of-child-playing-with-colorful-toys-at-indoor-play-area.png?cs=tinysrgb&dpr=1&w=500", alt: "Kinetic sand set", name: "Kinetic Sand Set", price: 14.99 },
            { src: "https://images.pexels.com/photos/8422171/pexels-photo-8422171.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Play dough set", name: "Play Dough Set", price: 11.99 },
            { src: "https://images.pexels.com/photos/39629993/pexels-photo-39629993/free-photo-of-adorable-baby-playing-in-colorful-ball-pit.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Textured sensory balls", name: "Textured Sensory Balls", price: 13.99 },
            { src: "https://images.pexels.com/photos/7352936/pexels-photo-7352936.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Sensory discovery bottles", name: "Sensory Discovery Bottles", price: 18.99 }
        ],
    },
    {
        id: "preschool-fine-motor-skills",
        category: "Early Childhood - Preschool",
        title: "Fine Motor Skills Practice Set",
        description: "Build hand strength and coordination through playful practice.",
        image: "https://images.pexels.com/photos/18609428/pexels-photo-18609428/free-photo-of-bowls-with-various-letter-beads.jpeg?auto=compress&w=1260&h=750&dpr=1",
        imageAlt: "Fine motor skills practice set",
        products: [
            { src: "https://images.pexels.com/photos/18609428/pexels-photo-18609428/free-photo-of-bowls-with-various-letter-beads.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Lacing beads set", name: "Lacing Beads Set", price: 12.99 },
            { src: "https://images.pexels.com/photos/8504345/pexels-photo-8504345.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Wooden peg board", name: "Wooden Peg Board", price: 15.99 },
            { src: "https://images.pexels.com/photos/5380155/pexels-photo-5380155.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Tweezer sorting set", name: "Tweezer Sorting Set", price: 13.99 },
            { src: "https://images.pexels.com/photos/7869789/pexels-photo-7869789.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Cutting practice activity pad", name: "Cutting Practice Activity Pad", price: 9.99 }
        ],
    },
    {
        id: "preschool-alphabet-learning",
        category: "Early Childhood - Preschool",
        title: "Alphabet Learning Set",
        description: "Learn letter names, sounds, and formation through play.",
        image: "https://images.pexels.com/photos/7333989/pexels-photo-7333989.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Alphabet learning set",
        products: [
            { src: "https://images.pexels.com/photos/7333989/pexels-photo-7333989.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Alphabet wooden puzzle", name: "Alphabet Wooden Puzzle", price: 16.99 },
            { src: "https://images.pexels.com/photos/5099795/pexels-photo-5099795.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Magnetic alphabet letters", name: "Magnetic Alphabet Letters", price: 14.99 },
            { src: "https://images.pexels.com/photos/6482216/pexels-photo-6482216.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Alphabet flashcards", name: "Alphabet Flashcards", price: 9.99 },
            { src: "https://images.pexels.com/photos/8363026/pexels-photo-8363026.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Letter tracing board", name: "Letter Tracing Board", price: 19.99 }
        ],
    },
    {
        id: "preschool-numbers-1-20",
        category: "Early Childhood - Preschool",
        title: "Numbers 1 to 20 Counting Set",
        description: "Count, order, and recognize numbers from 1 to 20.",
        image: "https://images.pexels.com/photos/7269671/pexels-photo-7269671.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Numbers 1 to 20 counting set",
        products: [
            { src: "https://images.pexels.com/photos/7269671/pexels-photo-7269671.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Wooden number puzzle", name: "Wooden Number Puzzle", price: 15.99 },
            { src: "https://images.pexels.com/photos/6623835/pexels-photo-6623835.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Counting blocks 1 to 20", name: "Counting Blocks 1-20", price: 18.99 },
            { src: "https://images.pexels.com/photos/7269670/pexels-photo-7269670.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Number flashcards", name: "Number Flashcards", price: 8.99 },
            { src: "https://images.pexels.com/photos/6692907/pexels-photo-6692907.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Wooden abacus", name: "Wooden Abacus", price: 21.99 }
        ],
    },
    {
        id: "study-sat-act-prep",
        category: "Study Skills and Test Prep",
        title: "SAT & ACT Prep Bundle",
        description: "Complete practice guides and tools for college entrance exam prep.",
        image: "https://images.pexels.com/photos/40490251/pexels-photo-40490251/free-photo-of-students-taking-an-exam-in-classroom-setting.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "SAT prep book",
        products: [
            { src: "https://images.pexels.com/photos/40490251/pexels-photo-40490251/free-photo-of-students-taking-an-exam-in-classroom-setting.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "SAT prep book", name: "SAT Prep Study Guide", price: 29.99 },
            { src: "https://images.pexels.com/photos/7092498/pexels-photo-7092498.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "ACT prep book", name: "ACT Prep Study Guide", price: 29.99 },
            { src: "https://images.pexels.com/photos/7692464/pexels-photo-7692464.jpeg?auto=compress&w=1260&h=750&dpr=1", alt: "Test prep flashcards", name: "Vocabulary and Math Flashcards", price: 16.99 },
            { src: "https://images.pexels.com/photos/31115182/pexels-photo-31115182/free-photo-of-student-taking-exam-in-classroom-setting.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Practice test workbook", name: "Full-Length Practice Test Workbook", price: 19.99 }
        ],
    },
    {
        id: "study-organization-planner-set",
        category: "Study Skills and Test Prep",
        title: "Study Planner and Organization Set",
        description: "Keep assignments, deadlines, and study notes organized all year.",
        image: "https://images.pexels.com/photos/7428847/pexels-photo-7428847.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Academic planner",
        products: [
            { src: "https://images.pexels.com/photos/7428847/pexels-photo-7428847.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Academic planner", name: "Academic Planner", price: 18.99 },
            { src: "https://images.pexels.com/photos/273034/pexels-photo-273034.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Subject notebooks", name: "Subject Notebook Set", price: 14.99 },
            { src: "https://images.pexels.com/photos/6193315/pexels-photo-6193315.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Tab dividers", name: "Color Tab Dividers Set", price: 8.99 },
            { src: "https://images.pexels.com/photos/8004028/pexels-photo-8004028.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Sticky notes and page flags", name: "Sticky Notes and Page Flags", price: 9.99 }
        ],
    },
    {
        id: "study-reading-support-tools",
        category: "Study Skills and Test Prep",
        title: "Reading Support and Dyslexia-Friendly Tools",
        description: "Tools that make reading clearer, calmer, and easier to follow.",
        image: "https://images.pexels.com/photos/32368063/pexels-photo-32368063/free-photo-of-young-adult-reading-a-book-outdoors-in-khulna.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Reading guide strips",
        products: [
            { src: "https://images.pexels.com/photos/32368063/pexels-photo-32368063/free-photo-of-young-adult-reading-a-book-outdoors-in-khulna.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Reading guide strips", name: "Reading Guide Strips", price: 7.99 },
            { src: "https://images.pexels.com/photos/6958526/pexels-photo-6958526.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Colored reading overlays", name: "Colored Reading Overlays", price: 12.99 },
            { src: "https://images.pexels.com/photos/247781/pexels-photo-247781.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Reading ruler magnifier", name: "Reading Ruler Magnifier", price: 11.99 },
            { src: "https://images.pexels.com/photos/1792734/pexels-photo-1792734.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Large-print reader", name: "Large-Print Reading Book", price: 15.99 }
        ],
    },
    {
        id: "study-focus-sensory-tools",
        category: "Study Skills and Test Prep",
        title: "Focus and Sensory Learning Tools",
        description: "Sensory-friendly tools to support focus during study and classwork.",
        image: "https://images.pexels.com/photos/5202427/pexels-photo-5202427.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Noise-reducing earmuffs",
        products: [
            { src: "https://images.pexels.com/photos/5202427/pexels-photo-5202427.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Noise-reducing earmuffs", name: "Noise-Reducing Earmuffs", price: 24.99 },
            { src: "https://images.pexels.com/photos/4114789/pexels-photo-4114789.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Visual countdown timer", name: "Visual Countdown Timer", price: 22.99 },
            { src: "https://images.pexels.com/photos/4587677/pexels-photo-4587677.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Wobble seat cushion", name: "Wobble Seat Cushion", price: 19.99 },
            { src: "https://images.pexels.com/photos/8617550/pexels-photo-8617550.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Quiet fidget tool set", name: "Quiet Fidget Tool Set", price: 13.99 }
        ],
    },
    {
        id: "study-hands-on-manipulatives",
        category: "Study Skills and Test Prep",
        title: "Hands-On Learning Manipulatives Set",
        description: "Tactile tools for building literacy and math understanding by doing.",
        image: "https://images.pexels.com/photos/8716168/pexels-photo-8716168.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Magnetic letter tiles",
        products: [
            { src: "https://images.pexels.com/photos/8716168/pexels-photo-8716168.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Magnetic letter tiles", name: "Magnetic Letter Tiles", price: 18.99 },
            { src: "https://images.pexels.com/photos/9218692/pexels-photo-9218692.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Counting cubes", name: "Counting Cubes Set", price: 12.99 },
            { src: "https://images.pexels.com/photos/311269/pexels-photo-311269.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Fraction tiles", name: "Fraction Tiles Set", price: 16.99 },
            { src: "https://images.pexels.com/photos/13579580/pexels-photo-13579580.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Tactile number line", name: "Tactile Number Line", price: 14.99 }
        ],
    },
    {
        id: "elem-math-addition-subtraction",
        category: "Mathematics - Elementary",
        title: "Addition & Subtraction Set",
        description: "Practice tools for building addition and subtraction fluency.",
        image: "https://images.pexels.com/photos/8923571/pexels-photo-8923571.jpeg?cs=tinysrgb&dpr=1&w=500",
        imageAlt: "Addition and subtraction flash cards",
        products: [
            { src: "https://images.pexels.com/photos/8923571/pexels-photo-8923571.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Addition and subtraction flash cards", name: "Addition & Subtraction Flash Cards", price: 8.99 },
            { src: "https://images.pexels.com/photos/8363116/pexels-photo-8363116.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Math fact dominoes", name: "Math Fact Dominoes", price: 15.99 },
            { src: "https://images.pexels.com/photos/8923967/pexels-photo-8923967.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Number bond blocks", name: "Number Bond Blocks", price: 21.99 },
            { src: "https://images.pexels.com/photos/16613920/pexels-photo-16613920/free-photo-of-first-grade-student.jpeg?cs=tinysrgb&dpr=1&w=500", alt: "Addition and subtraction workbook", name: "Addition & Subtraction Workbook", price: 11.99 }
        ],
    },
];

export const CATALOGUE_CATEGORIES = Array.from(new Set(CATALOGUE.map((entry) => entry.category)));
