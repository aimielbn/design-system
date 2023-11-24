<template>
  <Container>
    <TitresH1> Accueil </TitresH1>

    <TextesParagraphe>
      Bienvenue sur le site ! Ici, vous trouverez toute la documentation de mon
      site.
    </TextesParagraphe>

    <TitresH2> Documentation </TitresH2>
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
