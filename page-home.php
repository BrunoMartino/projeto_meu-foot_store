<?php get_header();?>

<?php 
if(have_posts()){while(have_posts()){the_post();?>

<?php 
$img_url = get_template_directory_uri() . '/img-meufoot/logo';?>

<div><img src="<?= $img_url . '/neom.jpg' ?>" alt=""></div>

<?php } } ?>
<?php get_footer();?>