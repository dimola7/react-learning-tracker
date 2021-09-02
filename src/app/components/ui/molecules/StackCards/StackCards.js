import { CardsContainer } from "../../molecules/CardContainer/CardContainer.styles";
import { SmallCard } from "../../molecules/Cards/Card.styles";
import { Image } from "../../atoms/Images/Images.styles";
import { BigNumber, Text } from "../../atoms/Text/Text.styles";
import java from "../../../assets/img/java.svg";
import csharp from "../../../assets/img/csharp.svg";
import android from "../../../assets/img/android.svg";
import node from "../../../assets/img/nodejs.svg";
import python from "../../../assets/img/python.jpg";

const StackCards = () => {
    return (
        <div>
            <CardsContainer>
            <SmallCard>
                <Image src={java} alt="java" width="40px" style={{ marginTop: "20px" }}/>
                <Text>Java</Text>
                <BigNumber>80</BigNumber>
                <h4>Students</h4>
            </SmallCard>
            <SmallCard>
                <Image src={csharp} alt="csharp" width="40px" style={{ marginTop: "20px" }}/>
                <Text>C#</Text>
                <BigNumber>50</BigNumber>
                <h4>Students</h4>
            </SmallCard>
            <SmallCard>
                <Image src={android} width="40px" style={{ marginTop: "20px" }}/>
                <Text>Android</Text>
                <BigNumber>40</BigNumber>
                <h4>Students</h4>
            </SmallCard>
            <SmallCard>
                <Image src={node} width="80px" style={{ marginTop: "20px" }}/>
                <Text>Node JS</Text>
                <BigNumber>20</BigNumber>
                <h4>Students</h4>
            </SmallCard>
            <SmallCard>
                <Image src={python} alt="python" width="40px" height="40px" style={{ marginTop: "20px" }}/>
                <Text>Python</Text>
                <BigNumber>90</BigNumber>
                <h4>Students</h4>
            </SmallCard>
        </CardsContainer>
        </div>
    )
}

export default StackCards
