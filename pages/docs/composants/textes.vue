<script setup>
definePageMeta({
  layout: "docs",
});

const consoleLog = `console.log('hello')`;
const code = `<TextesCode code="${consoleLog}" language="js" />`;
</script>

<template>
  <Container>
    <TitresH1>Textes</TitresH1>

    <TextesParagraphe>
      Utilisez les composants de texte pour afficher des paragraphes ou des
      blocks de code, etc.
    </TextesParagraphe>

    <TitresH2>Paragraphe</TitresH2>

    <TextesParagraphe>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, voluptates quia quae voluptatem, quos quod quas
      voluptatibus quidem doloribus. Quisquam voluptatum, quibusdam, voluptates
      quia quae voluptatem, quos quod quas voluptatibus quidem doloribus.
    </TextesParagraphe>
    <TextesCode
      :code="`<TextesParagraphe>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, voluptates quia quae voluptatem, quos quod quas voluptatibus quidem doloribus. Quisquam voluptatum, quibusdam, voluptates quia quae voluptatem, quos quod quas voluptatibus quidem doloribus.
</TextesParagraphe>`"
    />

    <TitresH2>Code</TitresH2>

    <TextesParagraphe> Language par défaut : vue </TextesParagraphe>

    <TextesCode :code="consoleLog" language="js" />

    <TextesCode :code="code" />

    <TitresH2>Gras</TitresH2>
    <TextesParagraphe>
      <TextesGras>Texte en gras</TextesGras>
    </TextesParagraphe>
    <TextesCode :code="`<TextesGras>Texte en gras</TextesGras>`" />

    <TitresH2>Italique</TitresH2>
    <TextesParagraphe>
      <TextesItalique>Texte en italique</TextesItalique>
    </TextesParagraphe>
    <TextesCode :code="`<TextesItalique>Texte en italique</TextesItalique>`" />

    <TitresH2>Souligné</TitresH2>
    <TextesParagraphe>
      <TextesSouligne>Texte souligné</TextesSouligne>
    </TextesParagraphe>
    <TextesCode :code="`<TextesSouligne>Texte souligné</TextesSouligne>`" />

    <TitresH2>Citation</TitresH2>
    <TextesParagraphe>
      <TextesCitation>Le style avant l'hypothermie</TextesCitation>
    </TextesParagraphe>
    <TextesCode :code="`<TextesCitation>Citation</TextesCitation>`" />
  </Container>
</template>
