<template lang="html">
  <div>
    <sui-card>
      <a href="#"><sui-image src="https://images.unsplash.com/photo-1440186170739-681f007fc4d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/></a>
      <sui-card-content>
        <sui-card-header><a>Course 1</a></sui-card-header>
        <sui-card-meta>
          <a class="numpost" >3 posts</a>
        </sui-card-meta>
        <sui-card-meta>
          <sui-card-description
          >Kristy is an art director living in New York.</sui-card-description
        >
        </sui-card-meta>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'LinkCardExample',
};
</script>

<style scoped>
*{
  font-family: "Montserrat", sans-serif;
}
.numpost{
  font-size: 12px;
  
}
.discript{
  
  font-size: 15px;
}

</style>