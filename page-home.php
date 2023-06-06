<?php get_header(); ?>
<?php 
if (have_posts()) { while (have_posts()) { the_post(); ?>
    
 <section class="container slide-galeria">
    <?php cmb2_slide_file_list('add_slide_home', $image_size = "large") ?>
 </section>   











<?php } } ?>
<?php get_footer(); ?>