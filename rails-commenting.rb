# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) The following line states that the BlogPosts controller will inheret methods and properties from ApplicationController
class BlogPostsController < ApplicationController
  def index
    # 2) This line saves all entries in the BlogPost model to an instance variable for use within our ERB HTML ocument. 
    @posts = BlogPost.all
  end

  def show
    # 3) This assigns a the blog post of a specific ID to an instance variable
    @post = BlogPost.find(params[:id])
  end

  # 4) This is the method that calls our new page. Since no action is actually being done to our database right now, all we have to do at this step is route them to the form page so the method is empty. 
  def new
  end

  def edit
  end

  def create
    # 5) This line creates a new instance in Blog Post with the params from our blog post params down below
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) This line takes them back to the post they were trying to delete if the delete fails
      redirect_to blog_post_path(@post)
    end
  end

  # 7) Everything below this can only be called by a method within the controller. 
  private
  def blog_post_params
    # 8) These are our strong params, they list out what parameters any function using them is allowed to accept. 
    params.permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) This is our model file, it allows us to change how our model accepts and interacts with data. Here we can put validation errors and model relationships. 
class BlogPost < ApplicationRecord
  # 10) This designates our BlogPost model's relationship with our Comment model. Each BlogPost can have many associated comments. 
  has_many :comments
end
