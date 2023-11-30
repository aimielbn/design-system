<script setup>
definePageMeta({
  layout: "startup",
});
</script>

<template>
  <Container>
    <TitresH1> Bienvenue chez "Fils et perles !" </TitresH1>

    <TextesParagraphe>
      Ici, nous proposons des bijoux tel que des bracelets et des bijoux faits
      mains, mais aussi des chaînes de téléphone.
    </TextesParagraphe>

    <TitresH2>Nos services</TitresH2>

    <ListsGrid>
      <CardsUserCard>
        <Image src="/img/test.png" alt="test" />
        <TitresH2>Bagues, 3€/pièce</TitresH2>
        <TextesParagraphe
          >Bagues personnalisables en perles colorées. Fil
          élastique.</TextesParagraphe
        >
      </CardsUserCard>

      <CardsUserCard>
        <Image src="/img/test.png" alt="test" />
        <TitresH2>Bracelets, entre 20€ et 40€/pièce</TitresH2>
        <TextesParagraphe
          >Bracelets brésiliens personnalisables.</TextesParagraphe
        >
      </CardsUserCard>

      <CardsUserCard>
        <Image src="/img/test.png" alt="test" />
        <TitresH2>Chaînes de téléphone, 7€/pièce</TitresH2>
        <TextesParagraphe
          >Chaînes de téléphone personnalisables en perles colorées. Fil
          élastique.</TextesParagraphe
        >
      </CardsUserCard>
    </ListsGrid>
    <TitresH2>Où allez-vous ?</TitresH2>

    <ListsGrid>
      <li>
        <CardsIconCard to="/">
          <template #icon>
            <i class="fa-solid fa-arrow-left"></i>
          </template>
          Retour à la page d'accueil
        </CardsIconCard>
      </li>

      <li>
        <CardsIconCard to="/startup/equipe">
          <template #icon>
            <i class="fa-solid fa-people-group"></i>
          </template>
          Équipe
        </CardsIconCard>
      </li>

      <li>
        <CardsIconCard to="/startup/contact">
          <template #icon>
            <i class="fa-solid fa-address-book"></i>
          </template>
          Contact
        </CardsIconCard>
      </li>
    </ListsGrid>
  </Container>
</template>
