<script setup>
definePageMeta({
  layout: "startup",
});
</script>

<template>
  <Container>
    <TitresH1> Contact </TitresH1>

    <TextesParagraphe>
      Pour passer commande ou si vous avez des questions, contactez-nous !
    </TextesParagraphe>

    <InputsForm>
      <InputsGroup class="max-w-xs">
        <InputsLabel name="form-nom">Nom</InputsLabel>
        <InputsTexte v-model="nom" name="form-nom" placeholder="Votre nom" />
      </InputsGroup>

      <InputsGroup class="max-w-xs">
        <InputsLabel name="form-prenom">Prénom</InputsLabel>
        <InputsTexte
          v-model="prenom"
          name="form-prenom"
          placeholder="Votre prénom"
        />
      </InputsGroup>

      <InputsGroup class="max-w-xs">
        <InputsLabel name="form-description">Vos questions</InputsLabel>
        <InputsTextarea
          v-model="description"
          name="form-description"
          placeholder="Entrez du texte ..."
          rows="10"
        />
      </InputsGroup>
    </InputsForm>
  </Container>
</template>
