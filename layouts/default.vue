<template>
  <Head>
    <Title>Design System</Title>
    <Meta name="description" content="Design System" />
  </Head>
  <LayoutsBase>
    <template #navigation>
      <NavsNav>
        <template #logo>
          <TitresLogo>Design System</TitresLogo>
        </template>

        <template #links>
          <LinksNavLink to="/">Accueil</LinksNavLink>
          <LinksNavLink to="/docs">Documentation</LinksNavLink>
          <LinksNavLink to="/startup">Startup</LinksNavLink>
        </template>
      </NavsNav>
    </template>

    <template #content>
      <slot />
    </template>

    <template #footer>
      <FootersBasic />
    </template>
  </LayoutsBase>
</template>
