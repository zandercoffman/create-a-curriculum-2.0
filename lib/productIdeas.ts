// 200 educational products for curriculums, each paired with a Pexels image URL.
// All 200 URLs were HEAD-checked and returned 200 on 2026-10-31.
// Note: these Pexels photos are closest-match illustrations from the Create-a-Curriculum catalogue,
// not guaranteed photos of the exact product named.

export type IdeaType = {
    title: string;
    image: string;
};

const ideas: IdeaType[] = [
    {
        title: "Microscope",
        image: "https://images.pexels.com/photos/4033151/pexels-photo-4033151.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Graphing Calculator",
        image: "https://images.pexels.com/photos/12174065/pexels-photo-12174065.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Student Compound Microscope",
        image: "https://images.pexels.com/photos/9574397/pexels-photo-9574397.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Boxing Bag",
        image: "https://images.pexels.com/photos/4164521/pexels-photo-4164521.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Speed Rope",
        image: "https://images.pexels.com/photos/8032916/pexels-photo-8032916.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Number Flash Cards 0-100",
        image: "https://images.pexels.com/photos/6624378/pexels-photo-6624378.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Counting & Number Sense Workbook",
        image: "https://images.pexels.com/photos/7301353/pexels-photo-7301353.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Number Bond Blocks",
        image: "https://images.pexels.com/photos/8923967/pexels-photo-8923967.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Wooden Shape Sorter",
        image: "https://images.pexels.com/photos/4868565/pexels-photo-4868565.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Shape Tracing Workbook",
        image: "https://images.pexels.com/photos/6692927/pexels-photo-6692927.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Telling Time Flash Cards",
        image: "https://images.pexels.com/photos/32814222/pexels-photo-32814222/free-photo-of-blue-alarm-clock-with-flowers-close-up.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Classroom Balance Scale",
        image: "https://images.pexels.com/photos/5514785/pexels-photo-5514785.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Measuring Cups & Spoons Set",
        image: "https://images.pexels.com/photos/1005731/pexels-photo-1005731.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Division Flash Cards",
        image: "https://images.pexels.com/photos/8250913/pexels-photo-8250913.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Multiplication Dice Game",
        image: "https://images.pexels.com/photos/4172985/pexels-photo-4172985.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Fraction Dominoes Game",
        image: "https://images.pexels.com/photos/11432074/pexels-photo-11432074.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Play Money Coins and Bills Set",
        image: "https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Decimal Place Value Mat",
        image: "https://images.pexels.com/photos/5412110/pexels-photo-5412110.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Geoboard Set",
        image: "https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Word Problems Workbook Grades 3-5",
        image: "https://images.pexels.com/photos/5905965/pexels-photo-5905965.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Problem-Solving Strategy Poster Set",
        image: "https://images.pexels.com/photos/8363786/pexels-photo-8363786.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Algebra Tiles Set",
        image: "https://images.pexels.com/photos/6325944/pexels-photo-6325944.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Solving Equations Card Game",
        image: "https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Double Number Line Set",
        image: "https://images.pexels.com/photos/35865714/pexels-photo-35865714/free-photo-of-educational-tools-for-mathematics-study.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Integer Number Line Mat",
        image: "https://images.pexels.com/photos/8923942/pexels-photo-8923942.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Integer Operations Workbook",
        image: "https://images.pexels.com/photos/5412109/pexels-photo-5412109.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Graphing Ruler and Stencil Set",
        image: "https://images.pexels.com/photos/5412197/pexels-photo-5412197.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Probability Spinner Set",
        image: "https://images.pexels.com/photos/7047512/pexels-photo-7047512.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Data and Graphs Workbook",
        image: "https://images.pexels.com/photos/6990192/pexels-photo-6990192.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Algebra Tiles Manipulative Kit",
        image: "https://images.pexels.com/photos/311268/pexels-photo-311268.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Compass and Protractor Set",
        image: "https://images.pexels.com/photos/5412189/pexels-photo-5412189.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Drafting Triangle and Ruler Set",
        image: "https://images.pexels.com/photos/5412423/pexels-photo-5412423.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Unit Circle Poster Set",
        image: "https://images.pexels.com/photos/6256066/pexels-photo-6256066.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Pre-Calculus Practice Workbook",
        image: "https://images.pexels.com/photos/6256109/pexels-photo-6256109.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Polar and Graph Paper Pad",
        image: "https://images.pexels.com/photos/6256102/pexels-photo-6256102.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Statistics Practice Workbook",
        image: "https://images.pexels.com/photos/7947757/pexels-photo-7947757.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Normal Distribution Poster Set",
        image: "https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Magnetic Alphabet Letters",
        image: "https://images.pexels.com/photos/9882201/pexels-photo-9882201.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Blends & Digraphs Flash Cards",
        image: "https://images.pexels.com/photos/7156130/pexels-photo-7156130.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Blends Word Building Tiles",
        image: "https://images.pexels.com/photos/6005118/pexels-photo-6005118.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Sight Word Bingo Game",
        image: "https://images.pexels.com/photos/8653554/pexels-photo-8653554.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Early Reader Book Set",
        image: "https://images.pexels.com/photos/8922368/pexels-photo-8922368.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Phonics Storybooks Level 1",
        image: "https://images.pexels.com/photos/35610365/pexels-photo-35610365/free-photo-of-children-reading-outdoors-in-a-garden-setting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Word Families Workbook",
        image: "https://images.pexels.com/photos/26855735/pexels-photo-26855735/free-photo-of-pupil-writing-in-notebook.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Word Family Flip Book",
        image: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Children's Dictionary",
        image: "https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Chapter Book Set Grades 3-5",
        image: "https://images.pexels.com/photos/7929352/pexels-photo-7929352.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Spelling Workbook Grades 3-5",
        image: "https://images.pexels.com/photos/4817203/pexels-photo-4817203.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Spelling Word Sort Cards",
        image: "https://images.pexels.com/photos/5356420/pexels-photo-5356420.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Parts of Speech Poster Set",
        image: "https://images.pexels.com/photos/6307/desk-white-design-quote.jpg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Punctuation Practice Game",
        image: "https://images.pexels.com/photos/705177/words-letters-scrabble-text-705177.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Story Map Planning Pad",
        image: "https://images.pexels.com/photos/7296382/pexels-photo-7296382.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Essay Writing Workbook",
        image: "https://images.pexels.com/photos/204511/pexels-photo-204511.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "College Essay Examples Book",
        image: "https://images.pexels.com/photos/4476370/pexels-photo-4476370.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "MLA & APA Citation Guide",
        image: "https://images.pexels.com/photos/1383379/pexels-photo-1383379.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Advanced Grammar Workbook",
        image: "https://images.pexels.com/photos/5409045/pexels-photo-5409045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Grammar Reference Poster Set",
        image: "https://images.pexels.com/photos/11911071/pexels-photo-11911071.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Poetry Writing Journal",
        image: "https://images.pexels.com/photos/3007370/pexels-photo-3007370.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Poetry Analysis Workbook",
        image: "https://images.pexels.com/photos/11942173/pexels-photo-11942173.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Character Development Journal",
        image: "https://images.pexels.com/photos/261735/pexels-photo-261735.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Pride and Prejudice Novel",
        image: "https://images.pexels.com/photos/1204743/pexels-photo-1204743.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Character & Theme Discussion Cards",
        image: "https://images.pexels.com/photos/4245027/pexels-photo-4245027.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Shakespeare Complete Works",
        image: "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Poetry Anthology",
        image: "https://images.pexels.com/photos/3150550/pexels-photo-3150550.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Greek Mythology Anthology",
        image: "https://images.pexels.com/photos/20954437/pexels-photo-20954437/free-photo-of-marble-sculpture-of-zeus-in-the-louvre-museum.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Mythology Reading Journal",
        image: "https://images.pexels.com/photos/10033394/pexels-photo-10033394.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Brave New World Novel",
        image: "https://images.pexels.com/photos/185762/pexels-photo-185762.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Prepared Microscope Slides Set",
        image: "https://images.pexels.com/photos/4033307/pexels-photo-4033307.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Microscope Slide Making Kit",
        image: "https://images.pexels.com/photos/8533045/pexels-photo-8533045.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Pond Ecosystem Observation Kit",
        image: "https://images.pexels.com/photos/20943861/pexels-photo-20943861/free-photo-of-scenic-summer-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Human Skeleton Model",
        image: "https://images.pexels.com/photos/8471922/pexels-photo-8471922.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Human Body Systems Activity Book",
        image: "https://images.pexels.com/photos/8352120/pexels-photo-8352120.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Plant Life Cycle Model Set",
        image: "https://images.pexels.com/photos/22610716/pexels-photo-22610716/free-photo-of-close-up-of-green-sprouts.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Animal Habitats Diorama Kit",
        image: "https://images.pexels.com/photos/40016974/pexels-photo-40016974/free-photo-of-waterbuck-grazing-in-cantabria-park.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Animal Adaptations Exploration Kit",
        image: "https://images.pexels.com/photos/14981850/pexels-photo-14981850/free-photo-of-prairie-dog-family-on-brown-field.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Atom Model Building Kit",
        image: "https://images.pexels.com/photos/7723368/pexels-photo-7723368.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Chemistry Experiment Kit",
        image: "https://images.pexels.com/photos/8326467/pexels-photo-8326467.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "pH Test Strips",
        image: "https://images.pexels.com/photos/3735773/pexels-photo-3735773.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Pulley System Kit",
        image: "https://images.pexels.com/photos/5502652/pexels-photo-5502652.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Motion Experiments Book",
        image: "https://images.pexels.com/photos/6208712/pexels-photo-6208712.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Hand Crank Generator",
        image: "https://images.pexels.com/photos/32713414/pexels-photo-32713414/free-photo-of-smiling-man-operating-a-portable-generator-outdoors.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "States of Matter Model Kit",
        image: "https://images.pexels.com/photos/6945074/pexels-photo-6945074.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Matter and Materials Book",
        image: "https://images.pexels.com/photos/35600382/pexels-photo-35600382/free-photo-of-colorful-library-bookshelf-with-diverse-subjects.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Beginner Telescope",
        image: "https://images.pexels.com/photos/7387475/pexels-photo-7387475.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Rock Collection Kit",
        image: "https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Geology Field Guide",
        image: "https://images.pexels.com/photos/29421798/pexels-photo-29421798/free-photo-of-close-up-of-weathered-rock-formation.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Rain Gauge",
        image: "https://images.pexels.com/photos/33730457/pexels-photo-33730457/free-photo-of-rain-gauge-in-garden-with-wildflowers.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Weather Experiment Kit",
        image: "https://images.pexels.com/photos/16531199/pexels-photo-16531199/free-photo-of-thermostats-hanging-on-wall.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Water Testing Kit",
        image: "https://images.pexels.com/photos/18725478/pexels-photo-18725478/free-photo-of-vials-with-blue-liquid-in-a-lab.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Fossil Excavation Kit",
        image: "https://images.pexels.com/photos/3839557/pexels-photo-3839557.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Fossil Identification Guide",
        image: "https://images.pexels.com/photos/17194865/pexels-photo-17194865/free-photo-of-ancient-bones-in-stone.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Wooden Beam & Truss Building Set",
        image: "https://images.pexels.com/photos/30497827/pexels-photo-30497827/free-photo-of-wooden-covered-bridge-in-rural-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Snap Circuit Beginner Kit",
        image: "https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "LED, Resistor & Switch Component Pack",
        image: "https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Gear & Inclined Plane Building Set",
        image: "https://images.pexels.com/photos/28792581/pexels-photo-28792581/free-photo-of-rusty-industrial-gears-in-dimly-lit-workshop.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Simple Machines Activity Workbook",
        image: "https://images.pexels.com/photos/31501021/pexels-photo-31501021/free-photo-of-close-up-of-industrial-engine-components.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Egg Drop Protection Materials Pack",
        image: "https://images.pexels.com/photos/7105780/pexels-photo-7105780.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Magnetic Building Tiles Set",
        image: "https://images.pexels.com/photos/7104215/pexels-photo-7104215.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Forces & Stability Experiment Cards",
        image: "https://images.pexels.com/photos/6208704/pexels-photo-6208704.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Robot Sensor Pack",
        image: "https://images.pexels.com/photos/8294795/pexels-photo-8294795.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Block Coding Puzzle Set",
        image: "https://images.pexels.com/photos/4709290/pexels-photo-4709290.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Block Coding Activity Book",
        image: "https://images.pexels.com/photos/10638070/pexels-photo-10638070.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Python Coding Workbook",
        image: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Python Challenge Cards",
        image: "https://images.pexels.com/photos/4709287/pexels-photo-4709287.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Pixel Art Kit",
        image: "https://images.pexels.com/photos/33827091/pexels-photo-33827091/free-photo-of-isometric-pixel-art-robot-on-green-background.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Arduino Starter Kit",
        image: "https://images.pexels.com/photos/15470542/pexels-photo-15470542/free-photo-of-close-up-of-semiconnectors.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Arduino Projects Guidebook",
        image: "https://images.pexels.com/photos/35673120/pexels-photo-35673120/free-photo-of-arduino-microcontroller-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Revolutionary War Battles Map",
        image: "https://images.pexels.com/photos/40458787/pexels-photo-40458787/free-photo-of-historic-reenactment-of-revolutionary-war-soldiers.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Civil War Battle Map",
        image: "https://images.pexels.com/photos/33281125/pexels-photo-33281125/free-photo-of-scenic-view-of-gettysburg-national-battlefield.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Civil War History Book for Students",
        image: "https://images.pexels.com/photos/33436818/pexels-photo-33436818/free-photo-of-historical-reenactment-with-cannon-firing.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "\"I Have a Dream\" Speech Primary Source Set",
        image: "https://images.pexels.com/photos/32539238/pexels-photo-32539238/free-photo-of-martin-luther-king-jr-memorial-with-washington-monument.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "March on Washington Photo Book",
        image: "https://images.pexels.com/photos/36900242/pexels-photo-36900242/free-photo-of-martin-luther-king-jr-historical-park-statue.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Presidential Biographies Book",
        image: "https://images.pexels.com/photos/7252350/pexels-photo-7252350.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Oregon Trail Map Poster",
        image: "https://images.pexels.com/photos/4981820/pexels-photo-4981820.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Westward Expansion Timeline Cards",
        image: "https://images.pexels.com/photos/253625/pexels-photo-253625.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Cuneiform Clay Tablet Kit",
        image: "https://images.pexels.com/photos/37187864/pexels-photo-37187864/free-photo-of-stacked-clay-tablets-with-ancient-designs.png?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Medieval Castle Building Set",
        image: "https://images.pexels.com/photos/20407157/pexels-photo-20407157/free-photo-of-castle-by-the-shore-in-passau.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Medieval Manuscript Illumination Kit",
        image: "https://images.pexels.com/photos/15078808/pexels-photo-15078808/free-photo-of-medieval-carcassonne-castle.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "World War II Timeline Chart",
        image: "https://images.pexels.com/photos/35156484/pexels-photo-35156484/free-photo-of-architectural-detail-of-pacific-arch-at-national-memorial.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Home Front Poster Replica Set",
        image: "https://images.pexels.com/photos/2233388/pexels-photo-2233388.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Latitude and Longitude Globe",
        image: "https://images.pexels.com/photos/8828450/pexels-photo-8828450.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "World Festivals Poster Set",
        image: "https://images.pexels.com/photos/31115801/pexels-photo-31115801/free-photo-of-vibrant-drum-festival-in-cairo-streets.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Cultural Clothing Paper Doll Set",
        image: "https://images.pexels.com/photos/28993949/pexels-photo-28993949/free-photo-of-traditional-dance-performance-in-imphal-manipur.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Bill of Rights Flashcards",
        image: "https://images.pexels.com/photos/8035297/pexels-photo-8035297.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Branches of Government Chart",
        image: "https://images.pexels.com/photos/6610689/pexels-photo-6610689.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "How a Bill Becomes a Law Game",
        image: "https://images.pexels.com/photos/8205372/pexels-photo-8205372.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Play Money and Coins Set",
        image: "https://images.pexels.com/photos/32553500/pexels-photo-32553500/free-photo-of-close-up-of-stacked-us-dollar-banknotes.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Clear Savings Bank",
        image: "https://images.pexels.com/photos/10536934/pexels-photo-10536934.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Lemonade Stand Starter Kit",
        image: "https://images.pexels.com/photos/8541303/pexels-photo-8541303.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Teen Budgeting Workbook",
        image: "https://images.pexels.com/photos/7111496/pexels-photo-7111496.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Personal Finance Board Game",
        image: "https://images.pexels.com/photos/4792369/pexels-photo-4792369.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Sketchbook",
        image: "https://images.pexels.com/photos/34624877/pexels-photo-34624877/free-photo-of-art-sketchbook-with-pencil-drawings-on-table.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Watercolor Paint Set",
        image: "https://images.pexels.com/photos/6925018/pexels-photo-6925018.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Watercolor Brush Set",
        image: "https://images.pexels.com/photos/7859265/pexels-photo-7859265.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Sculpting Tools",
        image: "https://images.pexels.com/photos/6023573/pexels-photo-6023573.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Color Wheel Guide",
        image: "https://images.pexels.com/photos/4460007/pexels-photo-4460007.png?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Color Theory Book",
        image: "https://images.pexels.com/photos/30825649/pexels-photo-30825649/free-photo-of-livlig-mandalafargning-med-pennor-i-istanbul.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Famous Paintings Posters",
        image: "https://images.pexels.com/photos/18250532/pexels-photo-18250532/free-photo-of-paintings-exhibition-in-art-gallery.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Art Timeline Poster",
        image: "https://images.pexels.com/photos/40007136/pexels-photo-40007136/free-photo-of-art-gallery-in-cambridge-with-classic-paintings.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Beginner Piano Lesson Book",
        image: "https://images.pexels.com/photos/36587441/pexels-photo-36587441/free-photo-of-open-music-book-on-upright-piano-under-lamp.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Beginner Acoustic Guitar",
        image: "https://images.pexels.com/photos/7558112/pexels-photo-7558112.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Guitar Chord Book",
        image: "https://images.pexels.com/photos/9664315/pexels-photo-9664315.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Tambourine",
        image: "https://images.pexels.com/photos/7285220/pexels-photo-7285220.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Music Theory Workbook",
        image: "https://images.pexels.com/photos/1718380/pexels-photo-1718380.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Music Note Flash Cards",
        image: "https://images.pexels.com/photos/4146641/pexels-photo-4146641.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Practice Microphone",
        image: "https://images.pexels.com/photos/586416/pexels-photo-586416.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Microphone Stand",
        image: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Shin Guards",
        image: "https://images.pexels.com/photos/39571008/pexels-photo-39571008.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Basketball",
        image: "https://images.pexels.com/photos/34688570/pexels-photo-34688570/free-photo-of-two-basketballs-on-blue-indoor-court.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Basketball Pump",
        image: "https://images.pexels.com/photos/16499008/pexels-photo-16499008/free-photo-of-man-inflating-football-ball.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Yoga Blocks",
        image: "https://images.pexels.com/photos/6752177/pexels-photo-6752177.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Jump Rope",
        image: "https://images.pexels.com/photos/6339692/pexels-photo-6339692.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Exercise Ball",
        image: "https://images.pexels.com/photos/7671458/pexels-photo-7671458.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Insulated Water Bottle",
        image: "https://images.pexels.com/photos/10582935/pexels-photo-10582935.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Trail Compass",
        image: "https://images.pexels.com/photos/9906080/pexels-photo-9906080.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Nutrition Food Groups Chart",
        image: "https://images.pexels.com/photos/5966143/pexels-photo-5966143.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "CPR Training Kit",
        image: "https://images.pexels.com/photos/34104787/pexels-photo-34104787/free-photo-of-cpr-training-demonstration-on-mannequin.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Vegetable Seed Starter Kit",
        image: "https://images.pexels.com/photos/7782889/pexels-photo-7782889.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Watering Can",
        image: "https://images.pexels.com/photos/6912804/pexels-photo-6912804.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Fabric Squares Bundle",
        image: "https://images.pexels.com/photos/36293914/pexels-photo-36293914/free-photo-of-colorful-textile-fabric-pattern-display.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Household Skills Workbook",
        image: "https://images.pexels.com/photos/2030476/pexels-photo-2030476.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Calm-Down Kit",
        image: "https://images.pexels.com/photos/6707460/pexels-photo-6707460.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Beginner Spanish Workbook",
        image: "https://images.pexels.com/photos/5408919/pexels-photo-5408919.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Spanish Pronunciation Audio Course",
        image: "https://images.pexels.com/photos/3756776/pexels-photo-3756776.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Spanish Phrasebook for Everyday Situations",
        image: "https://images.pexels.com/photos/7770515/pexels-photo-7770515.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Spanish Grammar Workbook",
        image: "https://images.pexels.com/photos/5676740/pexels-photo-5676740.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Spanish Grammar Flashcards",
        image: "https://images.pexels.com/photos/6549353/pexels-photo-6549353.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Spanish Festivals Poster Set",
        image: "https://images.pexels.com/photos/1298930/pexels-photo-1298930.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Spanish Cooking Activity Book",
        image: "https://images.pexels.com/photos/35353127/pexels-photo-35353127/free-photo-of-deliziosa-paella-di-pesce-con-gamberi-in-preparazione.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Spanish Graded Reader",
        image: "https://images.pexels.com/photos/10638208/pexels-photo-10638208.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "French Picture Dictionary",
        image: "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "French Beginner Storybook",
        image: "https://images.pexels.com/photos/32759379/pexels-photo-32759379/free-photo-of-femme-se-relaxant-a-l-interieur-en-lisant-un-livre.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Mandarin Flashcards",
        image: "https://images.pexels.com/photos/30203225/pexels-photo-30203225.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "ASL Sign Language Dictionary",
        image: "https://images.pexels.com/photos/9017405/pexels-photo-9017405.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "ASL Fingerspelling Chart",
        image: "https://images.pexels.com/photos/9017412/pexels-photo-9017412.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Latin Vocabulary Flashcards",
        image: "https://images.pexels.com/photos/36585209/pexels-photo-36585209/free-photo-of-rooman-foorumin-temppelin-rauniot-roomassa-italiassa.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Latin Mythology Reader",
        image: "https://images.pexels.com/photos/13586596/pexels-photo-13586596.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "German Verb Chart",
        image: "https://images.pexels.com/photos/9158795/pexels-photo-9158795.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Kitchen Chemistry Experiment Kit",
        image: "https://images.pexels.com/photos/7230177/pexels-photo-7230177.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Volcano Eruption Kit",
        image: "https://images.pexels.com/photos/15973991/pexels-photo-15973991.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Earth Layers Model Kit",
        image: "https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Specimen Collection Kit",
        image: "https://images.pexels.com/photos/13028557/pexels-photo-13028557.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Bar Magnets Set",
        image: "https://images.pexels.com/photos/38412989/pexels-photo-38412989.png?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Nature Observation Journal",
        image: "https://images.pexels.com/photos/6034151/pexels-photo-6034151.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Magnifying Glass",
        image: "https://images.pexels.com/photos/3074542/pexels-photo-3074542.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Wooden Shape Puzzle",
        image: "https://images.pexels.com/photos/6692950/pexels-photo-6692950.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Color Mixing Art Set",
        image: "https://images.pexels.com/photos/7138917/pexels-photo-7138917.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Textured Sensory Balls",
        image: "https://images.pexels.com/photos/39629993/pexels-photo-39629993/free-photo-of-adorable-baby-playing-in-colorful-ball-pit.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Lacing Beads Set",
        image: "https://images.pexels.com/photos/18609428/pexels-photo-18609428/free-photo-of-bowls-with-various-letter-beads.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Cutting Practice Activity Pad",
        image: "https://images.pexels.com/photos/7869789/pexels-photo-7869789.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Alphabet Flashcards",
        image: "https://images.pexels.com/photos/6482216/pexels-photo-6482216.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Counting Blocks 1-20",
        image: "https://images.pexels.com/photos/6623835/pexels-photo-6623835.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Wooden Abacus",
        image: "https://images.pexels.com/photos/6692907/pexels-photo-6692907.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Vocabulary and Math Flashcards",
        image: "https://images.pexels.com/photos/7692464/pexels-photo-7692464.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Academic Planner",
        image: "https://images.pexels.com/photos/7428847/pexels-photo-7428847.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Sticky Notes and Page Flags",
        image: "https://images.pexels.com/photos/8004028/pexels-photo-8004028.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Colored Reading Overlays",
        image: "https://images.pexels.com/photos/6958526/pexels-photo-6958526.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Noise-Reducing Earmuffs",
        image: "https://images.pexels.com/photos/5202427/pexels-photo-5202427.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Wobble Seat Cushion",
        image: "https://images.pexels.com/photos/4587677/pexels-photo-4587677.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        title: "Counting Cubes Set",
        image: "https://images.pexels.com/photos/9218692/pexels-photo-9218692.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
];

export default ideas;

export { getRandomIdeas };

function getRandomIdeas(count: number) {
  const shuffled = [...ideas];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
