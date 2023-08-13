import spaceship from "./promises/spaceship";
import spaceship_engine from "./promises/spaceship_engine";

const shophia = new spaceship("Shophia", 10, 5);
const amsterda = new spaceship("Amsterdã", 14, 10);
const estrelaAna = new spaceship("Estrela anã", 20, 4);

const shophiaEngine = new spaceship_engine(shophia);
const amsterdaEngine = new spaceship_engine(amsterda);
const estrelaAnaEngine = new spaceship_engine(estrelaAna);

shophiaEngine.turnOn();
amsterdaEngine.turnOn();
estrelaAnaEngine.turnOn();
