import { CardsContainer } from "../ui/molecules/Containers/Containers.styles";
import { SmallCard } from "../ui/molecules/Cards/Cards.styles";
import { CardIcon } from "../ui/atoms/Images/Images.styles";
import { BigNumber, Text } from "../ui/atoms/Texts/Texts.styles";
import java from "../../assets/java.svg";
import csharp from "../../assets/csharp.svg";
import android from "../../assets/android.svg";
import node from "../../assets/nodejs.svg";
import python from "../../assets/python.jpg";

const StackCards = () => {
    return (
        <div>
            <CardsContainer>
            <SmallCard>
                <CardIcon src={java} alt="java" />
                <Text>Java</Text>
                <BigNumber>80</BigNumber>
                <h4>Students</h4>
            </SmallCard>
            <SmallCard>
                <CardIcon src={csharp} alt="csharp" />
                <Text>C#</Text>
                <BigNumber>50</BigNumber>
                <h4>Students</h4>
            </SmallCard>
            <SmallCard>
                <CardIcon src={android} />
                <Text>Android</Text>
                <BigNumber>40</BigNumber>
                <h4>Students</h4>
            </SmallCard>
            <SmallCard>
                <CardIcon src={node} className={node} />
                <Text>Node JS</Text>
                <BigNumber>20</BigNumber>
                <h4>Students</h4>
            </SmallCard>
            <SmallCard>
                <CardIcon src={python} alt="python" style={{ width: "40px", height:"40px"}}/>
                <Text>Python</Text>
                <BigNumber>90</BigNumber>
                <h4>Students</h4>
            </SmallCard>
        </CardsContainer>
        </div>
    )
}

export default StackCards
