<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="home">
      <h1>Code For Belgium Landing Pages Demo</h1>
      <p>Choose a landing page to view:</p>
      
      <nav class="demo-nav">
        <RouterLink to="/nsiv" class="demo-link">
          <h2>NSIV - Naar School in Vlaanderen</h2>
          <p>School placement finder for Flanders</p>
        </RouterLink>
        
        <RouterLink to="/vincentius" class="demo-link">
          <h2>Sint-Vincentius App</h2>
          <p>Welcome page for the Sint-Vincentius application</p>
        </RouterLink>
      </nav>
    </div>
  </main>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

.demo-nav {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.demo-link {
  display: block;
  text-decoration: none;
  color: #333;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1.5rem;
  min-width: 300px;
  transition: all 0.2s;
}

.demo-link:hover {
  background: #e9ecef;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.demo-link h2 {
  margin: 0 0 0.5rem 0;
  color: #003366;
}

.demo-link p {
  margin: 0;
  color: #666;
}
</style>
