defmodule ProjectBbWeb.Router do
  use ProjectBbWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ProjectBbWeb do
    pipe_through :api
  end
end
