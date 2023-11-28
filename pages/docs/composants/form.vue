<script setup>
definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1> Formulaire </TitresH1>

    <TextesParagraphe>
      Les formulaires sont très intéressants lorsqu'on veut récolter des
      informations importantes sur quelqu'un, ou pour donner des avis.
    </TextesParagraphe>

    <TitresH2>Input number</TitresH2>

    <InputsGroup class="max-w-xs">
      <InputsLabel name="num">Numéro</InputsLabel>
      <InputsNum></InputsNum>
    </InputsGroup>

    <TextesCode code="<InputsNum></InputsNum>" />

    <TitresH2>Input email</TitresH2>
    <InputsEmail></InputsEmail>

    <TextesCode code="<InputsEmail></InputsEmail>" />

    <TitresH2>Checkbox</TitresH2>

    <TextesCode code="" />

    <TitresH2>Select</TitresH2>

    <TextesCode code="" />

    <TitresH2>Radio</TitresH2>

    <TextesCode code="" />
  </Container>
</template>
