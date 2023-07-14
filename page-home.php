<?php 
//Template Name: Home
get_header(); ?>

<?php 
$products_chrono = wc_get_products([
  'limit' => 4,
  'tag'=> ['crono'],
]);
$products_new_inputs = wc_get_products([
  'limit' => 6,
  'orderby' => 'date',
  'order' => 'DESC',
]);
$products_most_sales = wc_get_products([
  'limit' => 6,
  'orderby' => 'meta_value_num',
  'order' => 'DESC'
]);


$data =[];

$data['cronometro'] = format_products($products_chrono, 'product-box');
$data['newest'] = format_products($products_new_inputs, 'product-box');
$data['most_sales'] = format_products($products_most_sales, 'product-box');
?>

<?php 
if(have_posts()){while(have_posts()){the_post();?>
<section class="container-slide slide-galeria" data-home="slide">
   <button class="prev_btn"></button>
    <?php cmb2_slide_file_list('add_slide_home','add_slide_home_url',$image_size = "slide-image") ?>
   <button class="next_btn"></button>
</section>   
<section class="container chrono-galeria" data-home="crono">
  <h1 class="font-2-up-xl">Promoção Relâmpago</h1>
  <?php meufoot_product_list($data['cronometro']) ?>
</section>
<section class="container most_sales-galeria">
  <h1 class="font-2-up-xl">Mais Vendidos</h1>
  <?php meufoot_product_list($data['most_sales']) ?>
</section>
<section class="container newest-galeria">
  <h1 class="font-2-up-xl">Lançamentos</h1>
  <?php meufoot_product_list($data['newest']) ?>
</section>





<?php } } ?>
<?php get_footer(); ?>