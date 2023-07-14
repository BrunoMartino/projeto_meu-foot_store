<?php get_header();?>

<?php if(have_posts()) { while (have_posts()) { the_post(); ?>
    <h1 class='index-title font-1-up-s cz-08'><?php the_title(); ?></h1>
    <main class='container'><?php the_content(); ?></main>
<?php } } ?>

<?php get_footer();?>