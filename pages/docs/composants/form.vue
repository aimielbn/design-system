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

    <form>
      <label for="numberInput">Numéro : </label>
      <input class="full-rounded"
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        id="numberInput"
        name="numberInput"
        required
      />
    </form>

    <TextesCode code="<TitresH1>Titre de niveau 1</TitresH1>" />

    <TitresH2>Input email</TitresH2>

    <form>
      <label for="emailInput">Email :</label>
      <input
        type="email"
        pattern=".+@example\.com"
        id="emailInput"
        name="emailInput"
        required
      />
    </form>

    <TextesCode code="<TitresH2>Titre de niveau 2</TitresH2>" />

    <TitresH2>Checkbox</TitresH2>

    <form>
      <label for="checkboxInput">Case à cocher :</label>
      <input type="checkbox" id="checkboxInput" name="checkboxInput" />
    </form>

    <TextesCode code="<TitresH3>Titre de niveau 3</TitresH3>" />

    <TitresH2>Select</TitresH2>

    <form>
      <label for="selectInput">Sélectionner :</label>
      <select id="selectInput" name="selectInput">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </form>

    <TextesCode code="<TitresH4>Titre de niveau 4</TitresH4>" />

    <TitresH2>Radio</TitresH2>

    <label>Radio :</label>
    <input type="radio" id="radioInput1" name="radioInput" value="radio1" />
    <label for="radioInput1">Radio 1</label>

    <input type="radio" id="radioInput2" name="radioInput" value="radio2" />
    <label for="radioInput2">Radio 2</label>

    <input type="radio" id="radioInput3" name="radioInput" value="radio3" />
    <label for="radioInput3">Radio 3</label>

    <TextesCode code="<TitresH4>Titre de niveau 4</TitresH4>" />
  </Container>
</template>
