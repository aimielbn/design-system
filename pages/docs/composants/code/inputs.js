export const inputText = `<InputsGroup class="max-w-xs">
    <InputsLabel name="nom">Nom</InputsLabel>
    <InputsTexte name="nom" placeholder="Votre nom" />
</InputsGroup>`;

export const inputTextWithError = `<InputsGroup class="max-w-xs">
    <InputsLabel name="nom">Nom</InputsLabel>
    <InputsTexte name="nom" placeholder="Votre nom" />
    <InputsErreur>Le champs nom est requis</InputsErreur>
</InputsGroup>`;

export const textarea = `<InputsGroup class="max-w-xs">
    <InputsLabel name="description">Description</InputsLabel>
    <InputsTextarea name="description" placeholder="Votre texte ..." rows="10" />
</InputsGroup>`;


export const form = `<InputsForm>
  <InputsGroup class="max-w-xs">
    <InputsLabel name="nom">Nom</InputsLabel>
    <InputsTexte v-model="nom" name="nom" placeholder="Votre nom" />
  </InputsGroup>

  <InputsGroup class="max-w-xs">
    <InputsLabel name="prenom">Prénom</InputsLabel>
    <InputsTexte
      v-model="prenom"
      name="prenom"
      placeholder="Votre prénom"
    />
  </InputsGroup>

  <InputsGroup class="max-w-xs">
    <InputsLabel name="description">Description</InputsLabel>
    <InputsTextarea
      v-model="description"
      name="description"
      placeholder="Votre texte ..."
      rows="10"
    />
  </InputsGroup>
</InputsForm>`;
