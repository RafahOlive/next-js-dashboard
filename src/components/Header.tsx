import { Flex, Text } from "@chakra-ui/react";

export default function Header(){
    return(
        <Flex as="header" width="100%" maxWidth={1480} height="20"
        marginX="auto" marginTop="4" paddingX="6" align="center"
        >
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight"
            width="64"
            >
                Dashboard
                <Text as="span" marginLeft="1" color="pink.500">.</Text>
            </Text>

            <Flex as="label" flex="1" paddingY="4" paddingX="8">

            </Flex>
        </Flex>
    );
}