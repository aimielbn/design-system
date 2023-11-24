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
      <b>Texte en gras</b>
    </TextesParagraphe>
    <TextesCode :code="`<b>Texte en gras</b>`" />

    <TitresH2>Italique</TitresH2>
    <TextesParagraphe>
      <i>Texte en italique</i>
    </TextesParagraphe>
    <TextesCode :code="`<i>Texte en italique</i>`" />

    <TitresH2>Souligné</TitresH2>
    <TextesParagraphe>
      <u>Texte souligné</u>
    </TextesParagraphe>
    <TextesCode :code="`<u>Texte souligné</u>`" />

    <TitresH2>Citation</TitresH2>
    <TextesParagraphe>
      <q>Le style avant l'hypothermie</q>
    </TextesParagraphe>
    <TextesCode :code="`<q>Texte souligné</q>`" />
  </Container>
</template>
