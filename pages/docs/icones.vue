<script setup>
definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1> Icones </TitresH1>

    <TextesParagraphe>
      Vous pouvez utilisez les icones de FontAwesome Icon dans vos projets.

      <LinksExternal to="https://fontawesome.com/"
        >https://fontawesome.com/</LinksExternal
      >
    </TextesParagraphe>

    <TitresH2>Exemples</TitresH2>

    <i class="fa-solid fa-heart text-6xl"></i>

    <TextesCode :code="`<i class=&quot;fa-solid fa-heart text-6xl></i>`" />
  </Container>
</template>
