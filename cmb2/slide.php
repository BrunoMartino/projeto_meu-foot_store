<?php

add_action('cmb2_admin_init', 'cmb2_fields_slides');

function cmb2_fields_slides() {
  $cmb = new_cmb2_box([
    'id' => 'slide_box',
    'title' => 'Slide',
    'object_types' => ['page'],
    'show_on' => [
      'key' => 'page_template',
      'value' => 'page-home.php'
    ],
  ]);
  $cmb->add_field([
    'name' => 'Adicione Banner no Slide',
    'id' => 'add_slide_home',
    'type' => 'file_list',
    'query_args' =>[
      'type' => 'image',
      'srcset' => false
    ],
    ]);
}

function cmb2_slide_file_list($file_list_meta_id, $image_size = "medium") {
  // get the list of images
    $files = get_post_meta(get_the_ID(), $file_list_meta_id, 1);
  echo '<div class="slide-wrapper">';
  echo '<ul class="slide">';
  foreach ((array) $files as $attachment_id => $attachment_url) {
    echo '<li>';
    echo wp_get_attachment_image($attachment_id, $image_size);
    echo '</li>';
  };
  echo '</div>';
  echo '</ul>';
}
?>
