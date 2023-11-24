<script setup>
definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1> Documentation </TitresH1>

    <TextesParagraphe>
      Bienvenue sur la documentation du Design System.
    </TextesParagraphe>

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
  </Container>
</template>
