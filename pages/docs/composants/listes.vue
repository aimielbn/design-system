<script setup>
import { codeListeLienIcone, codeGridIcones } from "./code/listes";

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1> Listes </TitresH1>

    <TextesParagraphe>
      Utilisez les listes pour structurer le contenu de vos pages.
    </TextesParagraphe>

    <TitresH2>Liste de liens avec icones</TitresH2>

    <ListsBasic>
      <li>
        <CardsIconLink to="/docs/composants">
          <template #icon>
            <i class="fa-solid fa-code"></i>
          </template>
          Composants
        </CardsIconLink>
      </li>

      <li>
        <CardsIconLink to="/docs/layouts">
          <template #icon>
            <i class="fa-solid fa-brush"></i>
          </template>
          Layouts
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/icones">
          <template #icon>
            <i class="fa-solid fa-icons"></i>
          </template>
          Icones
        </CardsIconLink>
      </li>
    </ListsBasic>

    <TextesCode :code="codeListeLienIcone" />

    <TitresH2>Grille de cartes avec des icones</TitresH2>

    <ListsGrid>
      <li>
        <CardsIconCard to="/docs/composants">
          <template #icon>
            <i class="fa-solid fa-code"></i>
          </template>
          Composants
        </CardsIconCard>
      </li>

      <li>
        <CardsIconCard to="/docs/layouts">
          <template #icon>
            <i class="fa-solid fa-brush"></i>
          </template>
          Layouts
        </CardsIconCard>
      </li>

      <li>
        <CardsIconCard to="/docs/icones">
          <template #icon>
            <i class="fa-solid fa-icons"></i>
          </template>
          Icones
        </CardsIconCard>
      </li>
    </ListsGrid>

    <TextesCode :code="codeGridIcones" />
  </Container>
</template>
