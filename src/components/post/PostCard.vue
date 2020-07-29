<template lang="html">
  <div>
    <sui-card>
      <sui-image class="image" src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
      <sui-card-content>
        <sui-card-header>Kristy</sui-card-header>
        <sui-card-meta>Joined in 2013</sui-card-meta>
        <sui-card-description
          >Kristy is an art director living in New York.</sui-card-description
        >
      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="comment outline" />
        comment
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'Card1Example',
};
</script>

<style scoped>
.image{
  width: 340px;
  height: 190px;
}
</style>