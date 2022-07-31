import Group from './creationalPatterns/composite/Group';
import Shape from './creationalPatterns/composite/Shape';
const group1 = new Group();
group1.add(new Shape()); //squere
group1.add(new Shape()); //squere
const group2 = new Group();
group2.add(new Shape()); //circle
group2.add(new Shape()); //circle

const group = new Group();
group.add(group1);
group.add(group2);
group.render();
