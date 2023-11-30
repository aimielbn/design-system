<script setup>
definePageMeta({
  layout: "startup",
});
</script>

<template>
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
        <InputsLabel name="form-description">Description</InputsLabel>
        <InputsTextarea
          v-model="description"
          name="form-description"
          placeholder="Votre texte ..."
          rows="10"
        />
      </InputsGroup>
    </InputsForm>
</template>