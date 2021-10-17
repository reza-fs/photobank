<template>
  <div class="grid-container">
    <div class="container">
      <div
          class="feature-item"
          v-for="(feature, key) in $frontmatter.features" :key="key">
        <img :src="feature.image" />
        <div class="action"><a :href="feature.link">
          {{feature.title}} - <strong class="currency">{{ feature.per_month}} USD</strong>
        </a></div>
      </div>
    </div>
  </div>
</template>


<style lang="css">
:root {
  --usd-color: #7b0005;
  --padding-top: 1rem;
}

.action {
  padding-top: var(--padding-top);
}

.currency {
  color: var(--usd-color);
  font-weight: bold;
  text-decoration: none;
}

.feature-item {
  max-width: 300px;
  background-color: white;
  border-radius: .5rem;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 10%);
  padding: 1rem;
  margin: 1rem;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 17px;
  grid-row-gap: 17px;
}

@media screen and (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-flow: row;
  }
}

.grid-container {
  padding-top: 5rem;
}
</style>
