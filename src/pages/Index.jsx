import React from "react";
import { Box, Container, Heading, Text, Image, VStack, Divider, useColorModeValue } from "@chakra-ui/react";
import { FaGamepad } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} as="article">
        <Box textAlign="center">
          <FaGamepad size="3em" />
          <Heading as="h1" size="xl" mt={2}>
            Šiuolaikinis jaunimas ir kompiuteriniai žaidimai
          </Heading>
        </Box>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNaW5lY3JhZnQlMjBnYW1lcGxheXxlbnwwfHx8fDE3MTA2NzA5ODR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Minecraft gameplay" />
        <VStack spacing={5}>
          <Text fontSize="lg">Šiuolaikinis jaunimas vis dažniau įžvelgia neįkainojamą vertę kompiuteriniuose žaidimuose, tokiose kaip Minecraft. Šis žaidimas, suteikdamas beveik neribotas kūrybines galimybes, tapo ne tik pramogos, bet ir mokymosi bei asmeninės raiškos šaltiniu.</Text>
          <Divider />
          <Text fontSize="lg">Vienas iš ryškiausių pavyzdžių yra vartotojas žinomas kaip sorybas. Jo įvairūs unikalių ir įdomių projektų kūrimai Minecraft pasaulyje demonstruoja, kad žaidimai gali būti naudojami kaip platforma kūrybiniams ir inovatyviems projektams realizuoti.</Text>
          <Text fontSize="lg">Sorybas yra pasidalinęs savo patirtimi, teigdamas, kad Minecraft žaidimas padėjo jam giliau suprasti žaidimo prasmę ir dvasią. Jo atvejis atskleidžia, kad kompiuteriniai žaidimai gali formuoti ne tik pramogą, bet ir mokymosi patirtį, skatindami kūrybiškumą, problemų sprendimo įgūdžius ir komandinį darbą.</Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
