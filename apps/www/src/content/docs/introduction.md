---
title: Introduction
description: Re-usable components built with Tailwind CSS.
---

<script setup>
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../.vitepress/theme/components/ui/default/accordion'
</script>

A collection of re-usable UI components I wrote for use in my Vue.js projects.

Components are copy-paste, using core logic from my `@aminnausin/cedar-ui` npm package.

<div class="[&>h2]:mb-0!">

## FAQ

</div>

<div class="[&_h3]:mt-0!">
<Accordion  type="multiple">

<AccordionItem value="faq-1">
<AccordionTrigger>
Why not packaged as a dependency?
</AccordionTrigger>
<AccordionContent>

The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.

Start with some sensible defaults, then customize the components to your needs.

One of the drawback of packaging the components in an npm package is that the style is coupled with the implementation. _The design of your components should be separate from their implementation._

</AccordionContent>
</AccordionItem>
<AccordionItem value="faq-2">
<AccordionTrigger>
Which frameworks are supported?
</AccordionTrigger>
<AccordionContent>

This is strictly a Vue library.

</AccordionContent>
</AccordionItem>
<AccordionItem value="faq-3">
<AccordionTrigger>
Can I use this in my project?
</AccordionTrigger>
<AccordionContent>
Yes. Free to use for personal and commercial projects. No attribution required.

It would be cool to see these components in your projects.
</AccordionContent>
</AccordionItem>
</Accordion>
</div>
