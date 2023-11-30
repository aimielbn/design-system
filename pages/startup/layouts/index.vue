<script setup>
definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1> Layouts </TitresH1>

    <TextesParagraphe>
      Utilisez les layouts pour définir la structure de vos pages.
    </TextesParagraphe>

    <TitresH2> App Layout </TitresH2>

    <div class="ring-2 ring-gray-200/75 my-8">
      <LayoutsBase>
        <template #navigation>
          <NavsDocsNavigation />
        </template>

        <template #content>
          <Container>
            <div>Contenu de la page</div>
          </Container>
        </template>

        <template #footer>
          <FootersBasic />
        </template>
      </LayoutsBase>
    </div>

    <TextesCode
      :code="`<LayoutsBase>
    <template #navigation>
        <NavsDocsNavigation />
    </template>

    <template #content>
        <Container>
            <div>Contenu de la page</div>
        </Container>
    </template>

    <template #footer>
        <FootersBasic />
    </template>
</LayoutsBase>`"
    />

    <TitresH2> Container </TitresH2>

    <TextesCode
      :code="`<Container>
    Contenu
</Container>
`"
    />
  </Container>
</template>
