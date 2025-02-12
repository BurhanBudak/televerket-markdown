<script setup>
import logo from '@/assets/logo.svg';
import { RouterLink, useRoute } from 'vue-router';


const isActiveLink = (routePath) => {
 const route = useRoute()
 return route.path === routePath
}
</script>

<template>
  <nav class="bg-tele-default border-b border-tele-default">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto logo" :src="logo" alt="Vue Jobs" width="125" height="125"/>
            <span class="hidden md:block text-white text-2xl font-bold ml-2">
              Troubleshooter MD
            </span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink 
                to="/"
                :class="[
                  isActiveLink('/') 
                  ? 'bg-tele-dark' 
                  : 'hover:bg-tele-dark hover:text-white',
                  'text-white', 
                  'px-3', 
                  'py-2', 
                  'rounded-md']"
                >
                Hem
              </RouterLink>
              <RouterLink 
                to="/fwa/add" 
                :class="[
                  isActiveLink('/fwa/add') 
                  ? 'bg-tele-dark' 
                  : 'hover:bg-tele-dark hover:text-white',
                  'text-white', 
                  'px-3', 
                  'py-2', 
                  'rounded-md']"
                >
                FWA
              </RouterLink>
              <RouterLink 
                to="/cellular/add" 
                :class="[
                  isActiveLink('/cellular/add') 
                  ? 'bg-tele-dark' 
                  : 'hover:bg-tele-dark hover:text-white',
                  'text-white', 
                  'px-3', 
                  'py-2', 
                  'rounded-md']"
                >
                Cellular
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>