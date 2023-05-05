import { Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const CustomCard = ({ title, description, imageUrl, buttonText }) => {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Card.Image source={{uri:imageUrl}} />
      <Text style={{ marginBottom: 10 }}>{description}</Text>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 5,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title={buttonText}
      />
    </Card>
  );
};

export default CustomCard;
