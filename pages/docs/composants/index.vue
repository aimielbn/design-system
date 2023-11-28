<script setup>
definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1> Composants </TitresH1>

    <TextesParagraphe>
      Les composants sont des éléments de base de l'interface. Ils sont utilisés
      pour construire les pages.
    </TextesParagraphe>

    <ListsBasic>
      <li>
        <CardsIconLink to="/docs/composants/titres">
          <template #icon>
            <i class="fa-solid fa-text-height"></i>
          </template>
          Titres
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/textes">
          <template #icon>
            <i class="fa-solid fa-pen-fancy"></i>
          </template>
          Textes
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/boutons">
          <template #icon>
            <i class="fa-solid fa-toggle-on"></i>
          </template>
          Boutons
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/liens">
          <template #icon>
            <i class="fa-solid fa-hashtag"></i>
          </template>
          Liens
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/listes">
          <template #icon>
            <i class="fa-solid fa-list"></i>
          </template>
          Listes
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/navs">
          <template #icon>
            <i class="fa-solid fa-bars"></i>
          </template>
          Navs
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/inputs">
          <template #icon>
            <i class="fa-solid fa-keyboard"></i>
          </template>
          Inputs
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/images">
          <template #icon>
            <i class="fa-solid fa-image"></i>
          </template>
          Images
        </CardsIconLink>
      </li>

      <li>
        <CardsIconLink to="/docs/composants/form">
          <template #icon>
            <i class="fa-solid fa-scroll"></i>
          </template>
          Formulaire
        </CardsIconLink>
      </li>

      <li>
        <CardsIconLink to="/docs/composants/card">
          <template #icon>
            <i class="fa-solid fa-scroll"></i>
          </template>
          Carte d'utilisateur
        </CardsIconLink>
      </li>
    </ListsBasic>
  </Container>
</template>
