<template>
  <main-layout>
    <Hero/>
    <About/>
    <Relationships/>
    <Requirements/>
    <Users/>
    <SignUp />
  </main-layout>
</template>

<script>
import MainLayout from "@/layout/MainLayout";
import Hero from "../components/Hero";
import About from "@/components/About";
import Relationships from "@/components/Relationships";
import Requirements from "@/components/Requirements";
import Users from "@/components/Users";
import SignUp from "@/components/SignUp";

export default {
  name: "Homepage",
  data() {
    return {
    };
  },
  components: {
    MainLayout,
    Hero,
    About,
    Relationships,
    Requirements,
    Users,
    SignUp
  }
};
</script>
