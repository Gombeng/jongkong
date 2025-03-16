<script>
  import ExpCard from "./components/ExpCard.svelte";
  import LinkItem from "./components/LinkItem.svelte";
  import ProjectCard from "./components/ProjectCard.svelte";
  import TechstackItem from "./components/TechstackItem.svelte";
  import Text from "./components/Text.svelte";
  export let websiteData = {};
  console.log('websiteData: ', websiteData);
  let activeIndex = 0;

  function handleToggle(index) {
    activeIndex = activeIndex === index ? null : index;
  }
</script>

<div data-theme={"cupcake"}>
  {#if !websiteData}
    <h1>Start creating your own website!</h1>
  {:else}
    <main
      class="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto"
    >
      <section id="hero" class="hero">
        <div class="hero-content">
          <div>
            <Text variant="h2">
              {websiteData.hero.name ?? "Full-stack Engineer"}
            </Text>
            <!-- <Text variant="h1">
              {name ?? "Your name"}
            </Text>
            <Text variant="p" addStyle="pt-5">
              {desc ?? "What does you do?"}
            </Text>

            <div class="flex flex-wrap gap-2 md:gap-4 xl:gap-6 mt-2 xl:mt-5">
              {#each links as { title, link }}
                <LinkItem href={link} {title} />
              {/each}
            </div> -->
          </div>
        </div>
      </section>

      <!-- <section id="experiences" class="hero">
        <div class="hero-content">
          <div>
            <Text variant="h1" addStyle="mb-5 md:mb-7 xl:mb-10"
              >Experiences</Text
            >
            {#each experiences as exp, index}
              <ExpCard {...exp} />

              {#if index !== experiences.length - 1}
                <div class="mb-5 xl:mb-10"></div>
              {/if}
            {/each}
          </div>
        </div>
      </section>

      <section id="projects" class="hero">
        <div class="hero-content">
          <div>
            <Text variant="h1" addStyle="mb-5 md:mb-7 xl:mb-10">Projects</Text>

            {#each projects as project, index}
              <ProjectCard
                {...project}
                isChecked={activeIndex === index}
                onToggle={() => handleToggle(index)}
              />
              {#if index !== projects.length - 1}
                <div class="p-1"></div>
              {/if}
            {/each}
          </div>
        </div>
      </section>

      <section id="tech-stack" class="hero py-5">
        <div class="hero-content gap-5 flex-col">
          <div>
            <Text variant="h3">Tech & Tools</Text>
          </div>
          <div class="flex flex-wrap justify-center gap-1 md:gap-2 mx-auto">
            {#each items as item}
              <TechstackItem {item} />
            {/each}
          </div>
        </div>
      </section>
    </main>

    <footer
      id="footer"
      class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10"
    >
      <aside>
        <p>Copyright © 2025 - All right reserved by {name}</p>
      </aside>
    </footer> -->
    </main>
  {/if}
</div>
